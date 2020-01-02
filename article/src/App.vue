<template>
  <div id="app">
    <header-component></header-component>
    <div class="layout-body">
      <sidebar-component></sidebar-component>
      <div class="layout-content">
        <div class="area" v-for="(item, index) in areaList" :key="index">
          <div class="header-box">
            <div class="content-header">
              <span class="file-name">{{item.fileName}}</span>
              <i class="iconfont">&#xeb2c;</i>
            </div>
          </div>
          <div class="content" :style="{height: windowInfo.contentHeight + 'px'}">
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
      areaList: [
        {
          fileName: '建设社会主义新中国',
          editValue: '',
          savedValue: ''
        }
      ]
    }
  },
  computed: mapState({
    windowInfo: state => state.windowInfo
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
    }
  }
}
</script>
