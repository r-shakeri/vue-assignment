<template>
  <ul>
    <li v-for="shop in list" 
      :key="shop.id" 
      :style="getStylePerCity(shop.cityColor)">
      <JShopItem :text="shop.addressName | removeStr('Jumbo ')"/>
    </li>
  </ul>
</template>

<script>
import JShopItem from "./JShopItem";

export default {
  name: "JShopsList",
  components: {
    JShopItem
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getStylePerCity(cityColor) {
      return { "background-color": cityColor };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
