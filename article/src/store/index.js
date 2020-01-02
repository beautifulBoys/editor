import Vue from 'vue'
import Vuex from 'vuex'
import fileList from '@/json/fold-data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    windowInfo: {
      innerHeight: 0,
      innerWidth: 0,
      sidebarContentHeight: 0,
      contentHeight: 0
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
                id: 14,
                text: '打开文件夹',
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
              }
            ]
          }
        ]
      }
    },
    sidebar: {
      topId: 1,
      top: [
        {id: 1, text: '项目', icon: '&#xebbc;'},
        {id: 2, text: '搜索', icon: '&#xeb4b;'},
        {id: 3, text: '主题', icon: '&#xeb1f;'},
        {id: 5, text: '拓展', icon: '&#xebbf;'}
      ],
      bottom: [
        {id: 6, text: '设置', icon: '&#xeb44;'}
      ],
      fileList: fileList,
      source: {
        listMap: {
          web: { text: 'WEB', foldStatus: false }
        }
      }
    },
    content: {
      cursor: 0,
      vid: 0,
      areaList: [
        {
          id: 0,
          cursor: 0,
          pages: [
            {
              id: 0,
              name: '新中国成立了'
            },
            {
              id: 1,
              name: '哈哈哈哈哈'
            }
          ]
        },
        {
          id: 1,
          cursor: 0,
          pages: [
            {
              id: 0,
              name: '李鑫测试文件'
            },
            {
              id: 1,
              name: '嘿嘿嘿'
            }
          ]
        }
      ]
    },
    footer: {}
  },
  mutations: {
    initWindowSize (state) {
      state.windowInfo.innerHeight = window.innerHeight
      state.windowInfo.innerWidth = window.innerWidth
      state.windowInfo.sidebarContentHeight = window.innerHeight - 45 - 25 - 40 - 30
      state.windowInfo.contentHeight = window.innerHeight - 45 - 25 - 40
    },
    createPage (state, info) {
      info = ''
      state.content.list.push(info)
    },
    addArea (state, {area, index}) {
      state.content.areaList.push({
        id: ++state.content.vid,
        cursor: null,
        pages: []
      })
    }
  }
})

export default store
