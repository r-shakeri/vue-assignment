<template>
  <ul>
    <li v-for="(tab, index) in items" 
      :key="index"
      @click="activeTab(index)"
      :class="{ active : activatedTab === index }">
      {{tab}}
    </li>
  </ul>
</template>

<script>

export default {
  name: "JTabs",
  model: {
    prop: 'tabIndex',
    event: 'update'
  },
  props: {
    tabIndex: {
      type: Number,
      required: false
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
  created() {
    
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
ul li.active {
  color: red;
}
</style>
