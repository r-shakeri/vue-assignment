<template>
  <div id="app">
    <Stores  />
  </div>
</template>

<script>
import Stores from "./components/Stores";

export default {
  name: "App",
  components: {
    Stores
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
