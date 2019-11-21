<template>
  <div id="app">
    <div class="layout-header">
      <div class="menu-box">
        <div class="logo"><i class="iconfont">&#xe6a2;</i></div>
        <div class="menu-item" v-for="(item, index) in menu.list" :key="index">{{item.text}}</div>
      </div>
      <div class="title-box">app.vue - Visual Studio Code</div>
      <div class="control-box">
        <div class="menu-item"><i class="iconfont">&#xeb36;</i></div>
        <div class="menu-item"><i class="iconfont">&#xeb05;</i></div>
        <div class="menu-item error"><i class="iconfont">&#xeb2c;</i></div>
      </div>
    </div>
    <div class="layout-body">
      <div class="left">
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
          <div class="file-title">资源管理器</div>
          <div class="block-title">
            <i class="iconfont">&#xeb80;</i> 打开的编辑器
          </div>
          <div class="block-content"></div>
          <div class="block-title">
            <i class="iconfont">&#xeb80;</i> WEB
          </div>
          <div class="block-content web">
            <div class="line" v-for="(item, index) in fileList" :key="index">
              <i :class="['iconfont', {none: item.type !== 'folder'}]">&#xeb80;</i>
              <i class="iconfont icon" v-if="item.type === 'folder'">&#xead2;</i>
              <i class="iconfont icon" v-else>&#xeacf;</i>
              <span>{{item.fullName || item.name}}</span>
            </div>
          </div>
          <div class="block-title">
            <i class="iconfont">&#xeb80;</i> 大纲
          </div>
          <div class="block-content"></div>
        </div>
      </div>
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
            <textarea v-model="codeMirror.value" class="textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="layout-footer">
      <div class="btn">
        <i class="iconfont refresh">&#xeb35;</i>
      </div>
      <div class="btn">
        <i class="iconfont refresh">&#xeb2d;</i>
        <span class="text">12</span>
        <i class="iconfont refresh">&#xeb22;</i>
        <span class="text">1245</span>
      </div>
      <span class="text fr">空格: 2</span> 
      <span class="text fr">行: 66，列: 345</span>
    </div>
  </div>
</template>

<script>
import fileList from '@/json/files.js'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/monokai.css'
export default {
  name: 'App',
  components: {
    'code-mirror': codemirror
  },
  data () {
    return {
      menu: {
        id: 1,
        list: [
          {id: 1, text: '文件(F)', cmd: ['Alt', 'F']},
          {id: 2, text: '编辑(E)', cmd: ['Alt', 'E']},
          {id: 3, text: '选择(S)', cmd: ['Alt', 'S']},
          {id: 4, text: '查看(V)', cmd: ['Alt', 'V']},
          {id: 5, text: '转到(G)', cmd: ['Alt', 'G']},
          {id: 6, text: '调试(D)', cmd: ['Alt', 'D']},
          {id: 7, text: '终端(T)', cmd: ['Alt', 'T']},
          {id: 8, text: '帮助(H)', cmd: ['Alt', 'H']}
        ]
      },
      fileList: fileList,
      sidebar: {
        topId: 1,
        top: [
          {id: 1, text: '资源管理器', icon: '&#xebbc;'},
          {id: 2, text: '搜索', icon: '&#xeb4b;'},
          {id: 3, text: '源代码管理器', icon: '&#xe632;'},
          {id: 4, text: '调试', icon: '&#xeb0c;'},
          {id: 5, text: '拓展', icon: '&#xebbf;'}
        ],
        bottom: [
          {id: 6, text: '管理', icon: '&#xeb44;'}
        ]
      },
      codeMirror: {
        value: `mounted () {
  document.onkeydown = function (e) {
    e = e || window.event
    if (e.altKey && e.keyCode === 70) console.log('----------')
  }
}`,
        options: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          mode: 'text/javascript',
          // keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai",
          extraKeys: { "Ctrl": "autocomplete" },
          hintOptions:{
            completeSingle: false,
            watch: 15
          }
        }
      }
    }
  },
  mounted () {
    document.onkeydown = function (e) {
      e = e || window.event
      if (e.altKey && e.keyCode === 70) console.log('----------')
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/const.less";
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background: @color-background;
  .layout-header {
    width: 100%;
    line-height: 30px;
    height: 30px;
    display: flex;
    user-select: none;
    .menu-item {
      color: @color-text;
      padding: 0 10px;
      font-size: @font-size;
      display: inline-block;
      cursor: default;
      text-align: center;
      &.error {
        &:hover {
          background: @color-btn-hover-error-background;
          color: #fff;
        }
      }
      &:hover {
        background: @color-btn-hover-background;
      }
    }
    .menu-box {
      flex-shrink: 1;
      .logo {
        padding: 0 10px;
        display: inline-block;
        cursor: default;
        text-align: center;
        line-height: 30px;
        vertical-align: top;
        height: 30px;
        i {
          color: #1296db;
          font-size: 18px;
        }
      }
    }
    .title-box {
      font-size: @font-size;
      color: @color-text;
      display: inline-block;
      padding: 0 10px;
      flex: 1;
      text-align: center;
    }
    .control-box {
      .menu-item {
        width: 25px;
      }
    }
  }
  .layout-body {
    width: 100%;
    flex: 1;
    display: flex;
    .left {
      width: 300px;
      display: flex;
      .side-bar {
        width: 50px;
        height: 100%;
        background: @color-btn-hover-background;
        display: flex;
        flex-flow: column;
        .item {
          width: 100%;
          text-align: center;
          line-height: 50px;
          color: @color-text;
          cursor: pointer;
          .iconfont {
            font-size: 30px;
            vertical-align: middle;
          }
          &.active, &:hover {
            color: #ccc;
          }
        }
        .top {
          flex: 1;
        }
      }
      .file-box {
        flex: 1;
        display: flex;
        flex-flow: column;
        .file-title {
          line-height: 30px;
          color: @color-text;
          font-size: @font-size;
          padding: 0 10px;
          cursor: default;
          border: 1px solid @color-background;
        }
        .block-title {
          line-height: 25px;
          color: #ccc;
          font-size: @font-size;
          background: @color-btn-hover-background;
          padding: 0 10px;
          cursor: pointer;
        }
        .block-content {
          &.web {
            flex: 1;
          }
          .line {
            line-height: 25px;
            color: #ccc;
            font-size: @font-size;
            padding: 0 10px;
            cursor: pointer;
            &:hover {
              background: fade(@color-btn-hover-background, 50);
            }
            .icon {
              font-size: 16px;
              vertical-align: middle;
            }
            .iconfont.none {
              opacity: 0;
            }
          }
        }
      }
    }
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
            font-family: Consolas;
            overflow: auto;
            word-break: break-all;
            box-sizing: border-box;
            padding: 0 0 0 50px;
          }
        }
      }
    }
  }
  .layout-footer {
    width: 100%;
    line-height: 20px;
    height: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    user-select: none;
    overflow: hidden;
    .iconfont {
      line-height: 20px;
      font-size: 16px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }
    .text {
      display: inline-block;
      margin-right: 5px;
      font-size: @font-size;
      line-height: 20px;
      color: #888;
      &.fr {
        float: right;
      }
    }
    .btn {
      cursor: pointer;
      display: inline-block;
      margin: 0 2px;
      font-size: @font-size;
      line-height: 20px;
      color: #888;
      padding: 0 7px;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
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
  font-family: Consolas, 'Microsoft YaHei';
}
</style>