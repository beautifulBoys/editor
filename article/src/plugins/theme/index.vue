<template>
  <div class="plugin-theme">
    <div class="file-title">主题</div>
    <div class="block-content" :style="{height: windowInfo.sidebarHeight - 130 + 'px'}">
      <theme-item v-for="(item, index) in list" :key="index" :item="item" @event="contentEvent"></theme-item>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import themeItem from './theme-item'
export default {
  name: 'plugin-theme',
  components: {
    'theme-item': themeItem
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
    for (let i = 0; i < 10; i++) {
      this.list.push({
        imgSrc: ''
      })
    }
  },
  methods: {
    // 工作目录点击事件
    contentEvent (content, item) {
      console.log('跳转到某文件指定位置', content, item)
    }
  }
}
</script>

<style lang="less">
@import "~@/style/iconfont.less";
@import "~@/style/func.less";
.plugin-theme {
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
  .block-content {
    width: 100%;
    overflow-y: auto;
    .scroll;
    .sidebar-theme-item {
      // width: 100px;
      background: #fff;
      border-bottom: 1px solid @color-border;
      padding: 5px;
      display: inline-block;
      margin: 5px;
      .img {
        width: 80px;
        height: 80px;
      }
      .title {
        text-align: center;
        font-size: @font-size;
        color: @color-text;
      }
    }
  }
}
</style>
