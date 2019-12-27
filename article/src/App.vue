<template>
  <div id="app">
    <header-component></header-component>
    <div class="layout-body">
      <sidebar-component></sidebar-component>
      <div class="layout-content">
        <div class="area">
          <div class="header">
            <div :class="['item', {active: index === 1}]" v-for="(item, index) in 4" :key="index">
              <i class="iconfont">&#xeacf;</i>
              <span class="text">App-list-asdfjasdfjasdfj.vue</span>
              <i class="iconfont close">&#xeb2c;</i>
            </div>
          </div>
          <div class="content">
            <textarea class="textarea"></textarea>
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

import sidebarItemComponent from '@/components/sidebar-item'
import sidebarListComponent from '@/components/sidebar-list'

Vue.component('sidebar-item-comp', sidebarItemComponent)
Vue.component('sidebar-list-comp', sidebarListComponent)

export default {
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent
  },
  data () {
    return {
      areaList: [
        {}
      ],
      code: ``,
      cmOption: {
        tabSize: 2,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/x-vue',
        keyMap: 'sublime',
        theme: 'base16-dark',
        extraKeys: {
          'F11'(cm) {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'))
          },
          'Esc'(cm) {
            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false)
          }
        }
      }
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
    this.initWindow()
    this.$store.commit('initWindowSize')
  },
  methods: {
    initWindow () {
      window.onresize = (e) => {
        this.$store.commit('initWindowSize')
      }
    }
  }
}
</script>
