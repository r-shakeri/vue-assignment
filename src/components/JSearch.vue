<template>
  <section>
    <input 
      :value="value"
      @input="onInput($event.target.value)"
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
  },
  methods: {
    onInput(value) {
      this.$emit('input', value.trim().toLowerCase())
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
