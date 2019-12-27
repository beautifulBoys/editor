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

import { codemirror } from 'vue-codemirror'

import sidebarItemComponent from '@/components/sidebar-item'
import sidebarListComponent from '@/components/sidebar-list'

import 'codemirror/lib/codemirror.css'

// theme
import 'codemirror/theme/base16-dark.css'
// language
import 'codemirror/mode/vue/vue.js'
// keyMaps
import 'codemirror/keymap/sublime.js'

Vue.component('sidebar-item-comp', sidebarItemComponent)
Vue.component('sidebar-list-comp', sidebarListComponent)

export default {
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent,
    'code-mirror': codemirror
  },
  data () {
    return {
      areaList: [
        {}
      ],
      code: `<template>
  <h1>Hello World!</h1>
  <br/>
  <br/>
  <codemirror v-model="code" :options="cmOption"></codemirror>
</template>
<style lang="scss">
  @import './sass/mixins';
  @import './sass/variables';
  main {
    position: relative;
  }
</style>`,
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
