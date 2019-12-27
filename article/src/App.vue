<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import sidebarItemComponent from '@/components/sidebar-item'
import sidebarListComponent from '@/components/sidebar-list'

Vue.component('sidebar-item-comp', sidebarItemComponent)
Vue.component('sidebar-list-comp', sidebarListComponent)

export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
@import "~@/style/func.less";

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 0;
  background: @color-background;
  font-family: "Microsoft YaHei";
}
</style>