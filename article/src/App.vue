<template>
  <div id="app">
    <header-component></header-component>
    <div class="layout-body">
      <sidebar-component></sidebar-component>
      <div class="layout-content">
        <div class="area" v-for="(area, areaId) of areaMap" :key="areaId">
          <div class="header-box">
            <div class="content-header-left">
              <div
                :class="['file-item-header', {active: area.cursor === page.id}]"
                v-for="(page, pageId) of area.pageMap"
                @click="switchPage(area, page)"
                :key="pageId"
              >
                <span class="file-name">{{page.name}}</span>
                <i class="iconfont" @click="closePage(areaId, pageId)">&#xeb2c;</i>
              </div>
            </div>
            <div class="content-header-right" @click="addAreaEvent(area, areaId)">
              <i class="iconfont">&#xead1;</i>
            </div>
          </div>
          <div
            class="content"
            :style="{height: windowInfo.contentHeight + 'px'}"
            v-for="(page, pageId) in area.pageMap"
            v-show="area.cursor === page.id"
            :key="pageId"
          >
            <wang-editor></wang-editor>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'

import headerComponent from '@/layout/header'
import footerComponent from '@/layout/footer'
import sidebarComponent from '@/layout/sidebar'

import wangEditor from '@/components/wang-editor'

export default {
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent,
    'wang-editor': wangEditor
  },
  data () {
    return {
    }
  },
  computed: mapState({
    windowInfo: state => state.windowInfo,
    areaMap: state => state.content.areaMap
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
    },
    initEvent () {
      document.onkeydown = function (e) {
        e = e || window.event
        if (e.altKey && e.keyCode === 70) console.log('----------')
      }
    },
    addAreaEvent (area, index) {
      this.$store.commit('addArea', {area, index})
    },
    switchPage (area, page) {
      area.cursor = page.id
    },
    closePage (areaId, pageId) {
      this.$store.commit('closePage', {areaId, pageId})
    },
    openPage () {
      this.$store.commit('openPage', {})
    }
  }
}
</script>
