<template>
  <div class="sidebar-layout">
    <div class="side-bar">
      <div class="top">
        <div :class="['item', {active: item.id === sidebar.topId}]" v-for="(item, index) in sidebar.top" :key="index" @click="setSidebarTab(item)">
          <i class="iconfont" v-html="item.icon"></i>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item, index) in sidebar.bottom" :key="index">
          <i class="iconfont" v-html="item.icon"></i>
        </div>
      </div>
    </div>
    <div class="file-box" :style="{height: windowInfo.sidebarHeight + 'px'}">
      <plugin-explorer :windowInfo="windowInfo" v-show="sidebar.topId === 1"></plugin-explorer>
      <plugin-search :windowInfo="windowInfo" v-show="sidebar.topId === 2"></plugin-search>
      <plugin-theme :windowInfo="windowInfo" v-show="sidebar.topId === 3"></plugin-theme>
      <plugin-expand :windowInfo="windowInfo" v-show="sidebar.topId === 4"></plugin-expand>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'
import menuItem from '@/components/menu-item'
import fileListData from '@/json/fold-data'

import explorer from '@/plugins/explorer'
import search from '@/plugins/search'
import theme from '@/plugins/theme'
import expand from '@/plugins/expand'

Vue.use(explorer)
Vue.use(search)
Vue.use(theme)
Vue.use(expand)
export default {
  components: {
    'menu-item': menuItem
  },
  data () {
    return {
      tabSize: 10,
      list: [],
      breadList: []
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.sidebar,
      windowInfo: state => state.windowInfo
    })
  },
  mounted () {
    this.list = fileListData
    this.breadList.push({
      name: '根目录',
      childrens: fileListData
    })
  },
  methods: {
    // 面包屑路径点击事件
    breadItemEvent (item, index) {
      this.list = item.childrens
      this.breadList = this.breadList.splice(0, index + 1)
    },
    setSidebarTab (item) {
      this.$store.commit('setSidebarTabId', {id: item.id})
    }
  }
}
</script>
