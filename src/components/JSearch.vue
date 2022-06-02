<template>
  <section>
    <input 
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="search" />
  </section>
</template>

<script>

export default {
  name: "JSearch",
  props: {
    value: {
      type: String,
      required: false
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
