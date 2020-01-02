<template>
  <div class="sidebar-layout">
    <div class="side-bar">
      <div class="top">
        <div :class="['item', {active: item.id === sidebar.topId}]" v-for="(item, index) in sidebar.top" :key="index">
          <i class="iconfont" v-html="item.icon"></i>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item, index) in sidebar.bottom" :key="index">
          <i class="iconfont" v-html="item.icon"></i>
        </div>
      </div>
    </div>
    <div class="file-box">
      <div class="file-title">工作目录</div>
      <div class="bread-menu">
        <!-- <span>
          <span class="bread-menu-item">根目录</span>
          <span> /</span>
        </span> -->
        <span v-for="(item, index) in breadList" :key="index">
          <span class="bread-menu-item" @click="breadItemEvent(item, index)">{{item.name}}</span>
          <span> /</span>
        </span>
      </div>
      <div
        class="block-content" 
        :style="{height: windowInfo.sidebarContentHeight + 'px'}"
      >
        <menu-item v-for="(item, index) in list" :key="index" :item="item" @event="menuEvent"></menu-item>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import menuItem from '@/components/menu-item'
import fileListData from '@/json/fold-data'
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
    // 工作目录点击事件
    menuEvent (item) {
      if (item.type === 'dir') {
        this.list = item.childrens
        this.breadList.push(item)
      } else if (item.type === 'file') {
        console.log('打开文件')
      }
    },
    // 面包屑路径点击事件
    breadItemEvent (item, index) {
      this.list = item.childrens
      this.breadList = this.breadList.splice(0, index + 1)
    }
  }
}
</script>
