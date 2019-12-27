<template>
  <div class="code-editor">
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
            <!-- <textarea class="textarea"></textarea> -->
            <code-mirror v-model="code" :options="cmOption"></code-mirror>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import headerComponent from '@/layout/header'
import footerComponent from '@/layout/footer'
import sidebarComponent from '@/layout/sidebar'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

// theme
import 'codemirror/theme/base16-dark.css'
// language
import 'codemirror/mode/vue/vue.js'
// keyMaps
import 'codemirror/keymap/sublime.js'

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

<style lang="less">
@import "~@/style/func.less";

.code-editor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: @color-background;
  .layout-body {
    width: 100%;
    flex: 1;
    display: flex;
    .layout-content {
      flex: 1;
      .area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        .header {
          width: 100%;
          background: @color-background;
          box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
          .item {
            line-height: 30px;
            font-size: @font-size;
            color: #555;
            padding: 0 7px;
            border-right: 1px solid #1c1c1c;
            box-sizing: border-box;
            display: inline-block;
            margin-right: 1px;
            cursor: pointer;
            &.active {
              color: #ccc;
              background: fade(@color-btn-hover-background, 50);
              .iconfont.close {
                opacity: 1;
              }
            }
            &:hover {
              .iconfont.close {
                opacity: 1;
              }
            }
            .text {
              vertical-align: middle;
              max-width: 100px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              display: inline-block;
            }
            .iconfont {
              font-size: 20px;
              vertical-align: middle;
              &.close {
                font-size: 12px;
                opacity: 0;
              }
            }
          }
        }
        .content {
          flex: 1;
          width: 100%;
          background: @color-content-background;
          .CodeMirror {
            border:1px solid black;
            font-size:15px;
            font-family: Roboto Mono, Consolas;
            font-size: @font-size + 1px;
            .scroll;
            overflow-y: scroll;
          }
        }
      }
    }
  }
}
</style>