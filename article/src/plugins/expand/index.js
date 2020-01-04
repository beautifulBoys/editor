import Vue from 'vue'
import Main from './index.vue'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
}
Main.config = {
  sidebar: {
    top: [
      {id: 4, text: '拓展', icon: '&#xebbf;'}
    ]
  }
}
export default Main