import Shop from "../models/Shop";
import Store from "../../store";
import Vue from 'vue'

class ShopAdapter {
    adapt({ uuid, addressName, city }) {
        return new Shop(uuid, Vue.filter('removeStr')(addressName, "Jumbo "), city, Store.getters["shops/cityColor"](city));
    }
}

export default new ShopAdapter();