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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
