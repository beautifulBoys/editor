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
            <!-- <baidu-editor @ready="ready($event, item)" v-model="item.editValue" :config="ueConfig" class="text-area-box"></baidu-editor> -->
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
import sidebarItemComponent from '@/components/sidebar-item'
import sidebarListComponent from '@/components/sidebar-list'

Vue.component('sidebar-item-comp', sidebarItemComponent)
Vue.component('sidebar-list-comp', sidebarListComponent)

const BaiduEditorConfigEdit = {
  autoHeightEnabled: true,
  initialFrameHeight: 1000,
  initialFrameWidth: '100%',
  serverUrl: '',
  UEDITOR_HOME_URL: '/static/UEditor/',
  toolbars: [],
  elementPathEnabled: false,
  wordCount: false
}

export default {
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent,
    'wang-editor': wangEditor
  },
  data () {
    return {
      ueConfig: BaiduEditorConfigEdit,
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
    document.onkeydown = function (e) {
      e = e || window.event
      if (e.altKey && e.keyCode === 70) console.log('----------')
    }
    console.log()
    this.initWindow()
  },
  methods: {
    ready (editor, item) {
      console.log('初始化成功', editor)
      item.editor = editor
    },
    initWindow () {
      this.$store.commit('initWindowSize')
      window.onresize = (e) => {
        this.$store.commit('initWindowSize')
      }
    }
  }
}
</script>
