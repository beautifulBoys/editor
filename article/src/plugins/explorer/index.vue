<template>
  <div class="plugin-explorer">
    <div class="file-title">工作目录</div>
    <div class="bread-menu">
      <span v-for="(item, index) in breadList" :key="index">
        <span class="bread-menu-item" @click="breadItemEvent(item, index)">{{item.name}}</span>
        <span> /</span>
      </span>
    </div>
    <div class="block-content" :style="{height: windowInfo.sidebarHeight - 70 + 'px'}">
      <menu-item
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        @contextmenu="contextmenuEvent"
        @event="menuEvent"
      ></menu-item>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import menuItem from './menu-item'
import fileListData from '@/json/fold-data'
export default {
  name: 'plugin-explorer',
  components: {
    'menu-item': menuItem
  },
  props: {
    windowInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      list: [],
      breadList: []
    }
  },
  mounted () {
    this.list = fileListData
    this.breadList.push({
      name: '根目录',
      childrens: fileListData
    })
  },
  methods: {
    // 工作目录点击事件
    menuEvent (item) {
      if (item.type === 'dir') {
        this.list = item.childrens
        this.breadList.push(item)
      } else if (item.type === 'file') {
        console.log('打开文件')
        this.$store.commit('openPage', item)
      }
    },
    // 工作目录右键菜单
    contextmenuEvent (e, item) {
      if (item.type === 'dir') {
        this.$store.commit('menu/change', {type: 'dir', active: true, event: e})
      } else if (item.type === 'file') {
        this.$store.commit('menu/change', {type: 'file', active: true, event: e})
      }
      return false
    },
    // 面包屑路径点击事件
    breadItemEvent (item, index) {
      this.list = item.childrens
      this.breadList = this.breadList.splice(0, index + 1)
    }
  }
}
</script>
