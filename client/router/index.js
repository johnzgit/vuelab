import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => System.import('../views/Home')
    }, {
      path: '/test',
      component: () => System.import('../views/Test')
    }
  ]
})
