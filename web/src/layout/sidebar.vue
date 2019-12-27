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
      <div class="file-title">资源管理</div>
      <div v-for="(item, key) in sidebar.source.listMap" :key="key" class="source-area">
        <div class="block-title">
          <i class="iconfont">&#xeb80;</i> {{item.text}}
        </div>
        <div
          class="block-content" 
          :style="{height: windowInfo.sidebarContentHeight + 'px'}"
          @mouseover="mouseEvent($event, true)"
          @mouseout="mouseEvent($event, false)">
          <sidebar-list-comp :childrens="sidebar.fileList" :foldStatus="true"></sidebar-list-comp>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.sidebar,
      windowInfo: state => state.windowInfo
    })
  },
  methods: {
    // 悬浮效果
    mouseEvent (e, bool) {
      e.stopPropagation()
      let sign = e.target.getAttribute('file-list-line')
      let target = sign === '1' ? e.target : sign === '2' ? e.target.parentNode : null
      if (!target) return
      let css = target.getAttribute('class')
      if (bool) {
        css && target.setAttribute('class', css + ' hover')
      } else {
        css && target.setAttribute('class', css.replace('hover', '').replace(/ +/g, ' '))
      }
    }
  }
}
</script>
<style lang="less">
@import "~@/style/func.less";
.sidebar-layout {
  height: 100%;
  display: flex;
  .side-bar {
    width: 50px;
    background: @color-btn-hover-background;
    display: flex;
    flex-flow: column;
    .item {
      width: 100%;
      text-align: center;
      line-height: 50px;
      color: @color-text;
      cursor: pointer;
      .iconfont {
        font-size: 30px;
        vertical-align: middle;
      }
      &.active, &:hover {
        color: #ccc;
      }
    }
    .top {
      flex: 1;
    }
  }
  .file-box {
    width: 250px;
    .source-area {
      width: 100%;
    }
    .file-title {
      line-height: 30px;
      color: @color-text;
      font-size: @font-size;
      padding: 0 10px;
      cursor: default;
      border: 1px solid @color-background;
    }
    .block-title {
      line-height: 25px;
      color: #ccc;
      font-size: @font-size;
      background: @color-btn-hover-background;
      padding: 0 10px;
      cursor: pointer;
    }
    .block-content {
      width: 100%;
      overflow-y: auto;
      .scroll;
    }
  }
}
</style>