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
      areaList: [
        {
          id: 0,
          cursor: 0,
          pageList: [
            {
              id: 0,
              name: '新建文件'
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
      state.windowInfo.sidebarHeight = window.innerHeight - 45 - 25
      state.windowInfo.sidebarContentHeight = window.innerHeight - 45 - 25 - 40 - 30
      state.windowInfo.contentHeight = window.innerHeight - 45 - 25 - 40
    },
    setSidebarTabId (state, {id}) {
      state.sidebar.topId = id
    },
    changePageCursor (state, {areaId, pageId}) {
      state.content.areaList.forEach((area, areaIndex) => {
        area.pageList.forEach((page, pageIndex) => {
          if (area.id === areaId && page.id === pageId) {
            state.content.cursor = areaIndex
            area.cursor = pageIndex
          }
        })
      })
    },
    addArea (state, {area, index}) {
      let id = ++state.content.vid
      state.content.areaList.push({
        id,
        cursor: 0,
        pageList: []
      })
      state.content.cursor = state.content.areaList.length - 1
    },
    openPage (state, info) {
      let id = ++state.content.vid
      let areaCursor = state.content.cursor
      let area = state.content.areaList[areaCursor]
      area.pageList.push({
        id,
        ...info
      })
      area.cursor = area.pageList.length - 1
    },
    closePage (state, {area, areaIndex, page, pageIndex}) {
      let areas = state.content.areaList[areaIndex]
      if (pageIndex === areas.pageList.length - 1) {
        areas.cursor = pageIndex === 0 ? 0 : pageIndex - 1
      }
      areas.pageList.splice(pageIndex, 1)
    }
  }
})

export default store
