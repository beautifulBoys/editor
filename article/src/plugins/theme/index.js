// import Vue from 'vue'
import Main from './index.vue'
import './index.less'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
}
Main.config = {
  sidebar: {
    top: [
      {id: 3, text: '主题', icon: '&#xeb1f;'}
    ]
  }
}
export default Main