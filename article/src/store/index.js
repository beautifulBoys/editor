import Vue from 'vue'
import Vuex from 'vuex'
import fileList from '@/json/fold-data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    windowInfo: {
      innerHeight: 0,
      innerWidth: 0,
      sidebarHeight: 0,
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
                text: '打开目录',
                cmd: ['Ctrl', 'N']
              },
              {
                id: 15,
                text: '导出项目',
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
        {id: 4, text: '拓展', icon: '&#xebbf;'}
      ],
      bottom: [
        {id: 5, text: '设置', icon: '&#xeb44;'}
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
      areaMap: {
        0: {
          id: 0,
          cursor: 0,
          pageMap: {
            0: {
              id: 1,
              name: '李鑫测试文件'
            }
          }
        }
      }
    },
    footer: {}
  },
  mutations: {
    initWindowSize (state) {
      state.windowInfo.innerHeight = window.innerHeight
      state.windowInfo.innerWidth = window.innerWidth
      state.windowInfo.sidebarHeight = window.innerHeight - 45 - 25
      state.windowInfo.sidebarContentHeight = window.innerHeight - 45 - 25 - 40 - 30
      state.windowInfo.contentHeight = window.innerHeight - 45 - 25 - 40
    },
    setSidebarTabId (state, {id}) {
      state.sidebar.topId = id
    },
    addArea (state, {area, index}) {
      let id = ++state.content.vid
      state.content.areaMap[id] = {
        id,
        cursor: 0,
        pageMap: {}
      }
    },
    openPage (state, {areaId = 0}) {
      let pageId = ++state.content.vid
      state.content.areaMap[areaId].pageMap[pageId] = {
        id: pageId,
        name: '新增加的' + pageId
      }
    },
    closePage (state, {areaId, pageId}) {
      delete state.content.areaMap[areaId].pageMap[pageId]
    }
  }
})

export default store
