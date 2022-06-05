<template>
  <div id="app">
    <JBaseLayout>
      <JShopsDashboard  />
    </JBaseLayout>
  </div>
</template>

<script>
import JBaseLayout from "./components/JBaseLayout";
import JShopsDashboard from "./components/shops/JShopsDashboard";

export default {
  name: "App",
  components: {
    JBaseLayout,
    JShopsDashboard
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
