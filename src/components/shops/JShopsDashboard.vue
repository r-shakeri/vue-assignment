<template>
  <article>
    <JTabs 
      v-model="tabIndex"
      :items="tabs" />
    <section v-show="tabIndex === 0">
      <JSearch v-model="searchedValue" />
      <ul class="stores">
        <li v-for="shop in filteredShops" :key="shop.id">
          <JShopItem 
            :text="shop.addressName"
            :style="getStylePerCity(shop.cityColor)"/>
        </li>
      </ul>
    </section>
    <section v-show="tabIndex === 1">
      <ul class="cities">
        <li v-for="city in cities" :key="city">
          <JShopItem :text="city"/>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import JShopItem from "./JShopItem";
import JSearch from "../JSearch";
import JTabs from "../JTabs";

export default {
  name: "JShopsDashboard",
  components: {
    JShopItem,
    JSearch,
    JTabs
  },
  data() {
    return {
      searchedValue: "",
      tabIndex: 0,
      tabs: ["stores", "cities"]
    };
  },
  created() {
    this.getShopsInfo();
  },
  computed: {
    cities() {
      return this.$store.getters["shops/cities"];
    },
    filteredShops() {
      return this.$store.getters["shops/filteredShops"](this.searchedValue);
    }
  },
  methods: {
    getShopsInfo() {
      this.$store.dispatch("shops/getShopsInfo");
    },
    getStylePerCity(cityColor) {
      return { "border-left": `40px solid ${cityColor}` }
    }
  }
};
</script>

<style lang="scss">
section {
  padding-top: 70px;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    position: relative;
    justify-content: space-between;

    li {
      text-decoration: none;
      display: block;
      margin: 8px 0;
    }
  }
}
</style>
