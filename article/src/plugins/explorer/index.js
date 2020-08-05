// import Vue from 'vue'
import Main from './index.vue'
import './index.less'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
}
Main.config = {
  sidebar: {
    top: [
      {id: 1, text: '项目', icon: '&#xebbc;'}
    ]
  }
}
export default Main