<template>
  <div id="app">
    <header-component></header-component>
    <div class="layout-body">
      <sidebar-component></sidebar-component>
      <div class="layout-content">
        <div class="area" v-for="(area, areaIndex) in areaList" :key="areaIndex">
          <div class="header-box">
            <div class="content-header-left">
              <div
                :class="['file-item-header', {active: area.cursor === pageIndex}]"
                v-for="(page, pageIndex) in area.pageList"
                @click="switchPage(area, areaIndex, page, pageIndex)"
                :key="pageIndex"
              >
                <span class="file-name">{{page.name}}</span>
                <i class="iconfont" @click="closePage(area, areaIndex, page, pageIndex)">&#xeb2c;</i>
              </div>
            </div>
            <div class="content-header-right" @click="addAreaEvent(area, areaIndex)">
              <i class="iconfont">&#xead1;</i>
            </div>
          </div>
          <div
            class="content"
            :style="{height: windowInfo.contentHeight + 'px'}"
            v-for="(page, pageIndex) in area.pageList"
            v-show="area.cursor === pageIndex"
            :key="pageIndex"
          >
            <wang-editor
              :page="page"
              @focus="focusEvent(area, areaIndex, page, pageIndex)"
              @change="changeEvent"
            ></wang-editor>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
    <menu-component></menu-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'

import headerComponent from '@/layout/header'
import footerComponent from '@/layout/footer'
import sidebarComponent from '@/layout/sidebar'
import menuComponent from '@/components/menu'

import wangEditor from '@/components/wang-editor'

export default {
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent,
    'menu-component': menuComponent,
    'wang-editor': wangEditor
  },
  data () {
    return {
    }
  },
  computed: mapState({
    windowInfo: state => state.windowInfo,
    areaList: state => state.content.areaList
  }),
  mounted () {
    this.initWindow()
    this.initEvent()
  },
  methods: {
    ready (editor, item) {
      item.editor = editor
    },
    initWindow () {
      this.$store.commit('initWindowSize')
      window.onresize = (e) => {
        this.$store.commit('initWindowSize')
      }
      document.oncontextmenu = (e) => {
        return false
      }
    },
    initEvent () {
      document.onkeydown = function (e) {
        e = e || window.event
        if (e.altKey && e.keyCode === 70) console.log('----------')
      }
    },
    addAreaEvent (area, areaIndex) {
      this.$store.commit('addArea', {})
    },
    switchPage (area, areaIndex, page, pageIndex) {
      this.$store.commit('changePageCursor', {areaIndex, pageIndex})
    },
    closePage (area, areaIndex, page, pageIndex) {
      this.$store.commit('closePage', {areaIndex, pageIndex})
    },
    focusEvent (area, areaIndex, page, pageIndex) {
      this.$store.commit('changePageCursor', {areaIndex, pageIndex})
    },
    changeEvent () {
      
    }
  }
}
</script>
