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
      <div
        class="block-content" 
        :style="{height: windowInfo.sidebarContentHeight + 'px'}"
        @mouseover="mouseEvent($event, true)"
        @mouseout="mouseEvent($event, false)"
      >
        <!-- <menu-item v-for="(item, index) in fileListData" :key="index" :item="item"></menu-item> -->
        <!-- <sidebar-list-comp :childrens="sidebar.fileList" :foldStatus="true"></sidebar-list-comp> -->
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
      fileListData: []
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.sidebar,
      windowInfo: state => state.windowInfo
    })
  },
  mounted () {
    // let res = this.changeFileListData(fileListData)
    // console.log(this.fileListData)
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
    },
    changeFileListData (arr) {
      arr.forEach(item => {
        if (item.type === 'dir') {
          this.fileListData.push(item)
          this.changeFileListData(item.childrens)
        } else if (item.type === 'file') {
          this.fileListData.push(item)
        }
      })
    }
  }
}
</script>
