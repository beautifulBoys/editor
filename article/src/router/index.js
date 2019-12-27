import Vue from 'vue'
import Router from 'vue-router'

import Code from '@/views/code'
import Article from '@/views/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/code',
    },
    {
      path: '/code',
      component: Code
    },
    {
      path: '/article',
      component: Article
    }
  ]
})
