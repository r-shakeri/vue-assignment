<template>
  <article>
    <JTabs 
      v-model="tabIndex"
      :items="tabs" />
    <section v-show="tabIndex === 0">
      <JSearch v-model="searchedValue" />
      <JShopsList :list="filteredShops"/>
    </section>
    <section v-show="tabIndex === 1">
      <ul>
        <li v-for="city in cities" :key="city">
          <JShopItem :text="city"/>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import JShopsList from "./JShopsList";
import JShopItem from "./JShopItem";
import JSearch from "../JSearch";
import JTabs from "../JTabs";

export default {
  name: "JShopsDashboard",
  components: {
    JShopsList,
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
