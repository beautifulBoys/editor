// import Vue from 'vue'
import Main from './index.vue'
import './index.less'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
}
Main.config = {
  sidebar: {
    top: [
      {id: 2, text: '搜索', icon: '&#xeb4b;'}
    ]
  }
}
export default Main