import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Base',
      name: 'Base',
      component: () => import('./views/Base.vue')
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('./views/HelloWorld.vue')
    }
  ]
})
