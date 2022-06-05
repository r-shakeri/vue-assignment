<template>
  <div class="item-container">
    <div class="item-text">
        {{text}}
    </div>
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
.item-container {
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0 , 0.10) 0px 1px 2px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  position: relative;
  width: 300px;
  text-align: center;
  .item-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
  }
}
</style>
