<template>
  <div class="input-group">
    <input 
      :value="value"
      @input="onInput($event.target.value)"
      placeholder="AddressName or City"
      aria-label="Username" />
    <div class="input-group-img">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import TestImport from "../../TestImport";

export default {
  name: "JSearch",
  props: {
    value: {
      type: String,
      required: false
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value.trim().toLowerCase())
    }
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  position: relative;
  display: flex;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 30px;
  width: 50%;
  margin: auto;
  margin-bottom: 40px;
  align-items: center;
  input {
    appearance: none;
    background: transparent;
    margin: 0;
    border: 0;
    padding: 17px 0 17px 25px;
    font-size: 15px;
    width: 100%;
    z-index: 1;
    outline: none;
  }
  .input-group-img {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
