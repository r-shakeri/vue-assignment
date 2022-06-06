<template>
  <div>
    <ul :data-active-index="activatedTab">
      <li v-for="(tab, index) in items" 
        :key="index"
        @click="activeTab(index)"
        :class="{ active : activatedTab === index }">
        {{tab}}
      </li>
    </ul>
  </div>
</template>

<script>
import TestImport from "../../TestImport";

export default {
  name: "JTabs",
  model: {
    prop: 'tabIndex',
    event: 'update'
  },
  props: {
    tabIndex: {
      type: Number,
      required: false,
      default: 0
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activatedTab: 0
    };
  },
  mounted() {
    this.activeTab(this.tabIndex);
  },
  methods: {
    activeTab(index) {
      this.activatedTab = index;
      this.$emit('update', index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/scss/variables.scss";

div {
  display: flex;
  justify-content: center;

  ul {
    display: inline-flex;
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 18px;
    color: $secondary;
    box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.10), 0px -2px 4px rgba(0, 0, 0, 0.10), 0px -4px 8px rgba(0, 0, 0, 0.10), 0px -8px 16px rgba(0, 0, 0, 0.10);
    border-radius: 5px;

    &[data-active-index="1"] {
      &::after {
        left: 200px;
      }
    }
    &::after {
      content: "";
      height: 2px;
      width: 200px;
      position: absolute;
      transition: .5s ease;
      z-index: 1;
      bottom: 0;
      left: 0;
      background-color: $primary;
      -webkit-box-shadow:0px 2px 8px $secondary;
      -moz-box-shadow:0px 2px 8px $secondary;
      box-shadow:0px 2px 8px $secondary;
    }
    li {
      position: relative;
      display: block;
      text-decoration: none;
      width: 200px;
      padding: 20px;
      cursor: pointer;
      text-align: center;
      background-color: #9B624C;
      border-bottom: 2px solid #9B624C;
      color: #fff;
      transition: all .3s ease-in;
      &.active {
        background-color: #fff;
        font-weight: bold;
        color: $secondary;
      }
      &:first-child {
        border-top-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
      }
    }
  }
}

</style>
