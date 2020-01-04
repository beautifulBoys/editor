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
      <menu-item v-for="(item, index) in list" :key="index" :item="item" @event="menuEvent"></menu-item>
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
    // 面包屑路径点击事件
    breadItemEvent (item, index) {
      this.list = item.childrens
      this.breadList = this.breadList.splice(0, index + 1)
    }
  }
}
</script>

<style lang="less">
@import "~@/style/iconfont.less";
@import "~@/style/func.less";
.plugin-explorer {
  width: 100%;
  height: 100%;
  .file-title {
    height: 40px;
    line-height: 40px;
    color: @color-text;
    font-size: @font-size;
    padding: 0 10px;
    cursor: default;
    box-sizing: border-box;
    border-bottom: 1px solid @color-sidebar-slide;
    background: #fff;
  }
  .bread-menu {
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    border-bottom: 1px solid @color-sidebar-slide;
    color: @color-text;
    font-size: @font-size - 2px;
    padding: 0 10px;
    .bread-menu-item {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .block-content {
    width: 100%;
    overflow-y: auto;
    .scroll;
    .sidebar-menu-item {
      width: 100%;
      user-select: none;
      line-height: 34px;
      height: 35px;
      color: @color-text;
      font-size: @font-size;
      cursor: pointer;
      border-bottom: 1px solid @color-border;
      background: @color-text;
      overflow: hidden;
      &:last-child {
        border: none;
      }
      .sidebar-menu-item-box {
        transition: transform 0.2s;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        .nowrap;
      }
      &:hover {
        .sidebar-menu-item-box {
          transform: translateX(8px);
          // background: fade(@color-text, 0.5);
        }
      }
      .iconfont {
        display: inline-block;
        &.icon {
          font-size: 16px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
