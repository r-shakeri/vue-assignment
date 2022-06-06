<template>
  <section v-show="show">
    <img alt="loading" src="../assets/loading.gif">
  </section>
</template>

<script>

export default {
  name: "JLoading",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: center;
    padding: 50px 0;
}
</style>
