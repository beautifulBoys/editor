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
                :class="['file-item-header', {active: area.cursor === page.id}]"
                v-for="(page, pageIndex) in area.pages"
                @click="switchPage(area, page)"
                :key="pageIndex"
              >
                <span class="file-name">{{page.name}}</span>
                <i class="iconfont">&#xeb2c;</i>
              </div>
            </div>
            <div class="content-header-right" @click="addAreaEvent(area, index)">
              <i class="iconfont">&#xead1;</i>
            </div>
          </div>
          <div
            class="content"
            :style="{height: windowInfo.contentHeight + 'px'}"
            v-for="(page, pageIndex) in area.pages"
            v-show="area.cursor === page.id"
            :key="pageIndex"
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
    }
  }
}
</script>
