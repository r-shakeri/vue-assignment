import Vue from "vue";
import Vuex from "vuex";
import ShopsService from "./shared/services/ShopsService";
import Utils from "./shared/Utils";
import ShopAdapter from "./shared/adapters/ShopAdapter";

Vue.use(Vuex);

const state = () => ({
  shops: [],
  citiesColorMap: new Map()
})

export const getters = {
  lightShops: (state, getters) => {
    return state.shops.map(shop => ShopAdapter.adapt(shop, getters.cityColor(shop.city)));
  },
  filteredShops: (state, getters) => searchedValue => {
    return getters.lightShops.filter(({ addressName, city }) => addressName.toLowerCase().includes(searchedValue) || city.toLowerCase().includes(searchedValue));
  },
  cities: (state) => {
    return [...state.citiesColorMap.keys()];
  },
  cityColor: (state) => city => {
    return state.citiesColorMap.get(city);
  }
}

export const mutations = {
  setShops(state, shops) {
    state.shops = shops;
  },
  setCitiesColorMap(state, newMap) {
    state.citiesColorMap = newMap;
  }
}

export const actions = {
  getShopsInfo({ commit, dispatch, state }) {
    if (state.shops.length > 0) {
      return new Promise(resolve => resolve())
    }
    return ShopsService.getShops()
    .then(shops => {
      commit("setShops", shops);
      dispatch("makeCitiesColorMap");
    });
  },
  makeCitiesColorMap({ commit, state }) {
    const newMap = new Map();
    state.shops.forEach(({ city }) => {
        newMap.set(city, Utils.generateRandomHexColor())
    });
    newMap.set("", "#FFFFFF");
    commit("setCitiesColorMap", newMap);
  }
}

const shops = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store({
  modules: {
    shops: shops
  }
})