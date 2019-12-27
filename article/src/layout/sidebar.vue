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
