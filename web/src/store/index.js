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
    content: {},
    footer: {}
  },
  mutations: {
    initWindowSize (state) {
      state.windowInfo.innerHeight = window.innerHeight
      state.windowInfo.innerWidth = window.innerWidth
      state.windowInfo.sidebarContentHeight = window.innerHeight - 107
    }
  }
})

export default store
