<template>
  <div>
        {{text}}
  </div>
</template>

<script>
export default {
  name: "JShopItem",
  data() {
    return {
    };
  },
  props: {
    text: {
        type: String,
        required: true
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
