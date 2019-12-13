import Vue from 'vue'
import Vuex from 'vuex'
import fileList from '@/json/fold-data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    windowInfo: {
      innerHeight: 0,
      innerWidth: 0,
      sidebarContentHeight: 0
    },
    header: {
      fileTitle: '',
      menu: {
        list: [
          {
            id: 1,
            text: '文件(F)',
            cmd: ['Alt', 'F'],
            list: [
              {
                id: 11,
                text: '新建文件',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 12,
                text: '新建窗口',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 13,
                text: '打开文件',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 14,
                text: '打开文件夹',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 15,
                text: '保存',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 16,
                text: '另存为',
                cmd: ['Ctrl', 'N']
              }
            ]
          },
          {
            id: 2,
            text: '编辑(E)',
            cmd: ['Alt', 'E'],
            list: [
              {
                id: 21,
                text: '剪切',
                cmd: []
              },
              {
                id: 22,
                text: '复制',
                cmd: []
              },
              {
                id: 23,
                text: '粘贴',
                cmd: []
              }
            ]
          },
          {
            id: 3,
            text: '查看(V)',
            cmd: ['Alt', 'V'],
            list: [
              {
                id: 31,
                text: '搜索',
                cmd: []
              }
            ]
          },
          {
            id: 4,
            text: '调试(D)',
            cmd: ['Alt', 'D'],
            list: [
              {
                id: 41,
                text: '启动调试',
                cmd: []
              }
            ]
          },
          {
            id: 5,
            text: '帮助(H)',
            cmd: ['Alt', 'H'],
            list: [
              {
                id: 51,
                text: '开发者工具',
                cmd: []
              },
              {
                id: 52,
                text: '关于',
                cmd: []
              }
            ]
          }
        ]
      }
    },
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
      ],
      fileList: fileList,
      source: {
        listMap: {
          web: { text: 'WEB', foldStatus: false }
        }
      }
    },
    content: {
      list: []
    },
    footer: {}
  },
  mutations: {
    initWindowSize (state) {
      state.windowInfo.innerHeight = window.innerHeight
      state.windowInfo.innerWidth = window.innerWidth
      state.windowInfo.sidebarContentHeight = window.innerHeight - 107
    },
    createPage (state, info) {
      info = ''
      state.content.list.push(info)
    }
  }
})

export default store
