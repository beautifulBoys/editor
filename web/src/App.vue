<template>
  <div id="app" :style="{width: windowInfo.innerWidth + 'px', height: windowInfo.innerHeight + 'px'}">
    <header-component></header-component>
    <div class="layout-body">
      <sidebar-component></sidebar-component>
      <div class="right">
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
import folderComponent from '@/components/folder'
import folderListComponent from '@/components/folder-list'
// import 'codemirror/theme/monokai.css'

Vue.component('folder-comp', folderComponent)

Vue.component('folder-list-comp', folderListComponent)

export default {
  name: 'App',
  components: {
    'header-component': headerComponent,
    'footer-component': footerComponent,
    'sidebar-component': sidebarComponent
  },
  data () {
    return {
      areaList: [
        {}
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
    this.initWindow()
    this.$store.commit('initWindowSize')
  },
  methods: {
    initWindow () {
      window.onresize = (e) => {
        this.$store.commit('initWindowSize')
        // this.source.listMap.web.height = window.innerHeight - 30 - 32 - 25 - 20
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/func.less";

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: @color-background;
  .layout-body {
    width: 100%;
    flex: 1;
    display: flex;
    .right {
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
          .textarea {
            width: 100%;
            height: 100%;
            resize: none;
            background: rgba(0, 0, 0, 0);
            outline: none;
            border: none;
            color: #eee;
            font-size: @font-size;
            line-height: 20px;
            font-family: Roboto Mono, Consolas;
            overflow: auto;
            word-break: break-all;
            box-sizing: border-box;
            padding: 0 0 0 50px;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
@import "~@/style/const.less";
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 0;
  background: @color-background;
  font-family: 'Microsoft YaHei';
}
</style>