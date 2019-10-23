import Vue from 'vue'
import Router from 'vue-router' //vvv ignorerar fel
// eslint-disable-next-line 
import Home from './views/Home.vue'
// eslint-disable-next-line 
import Login from './views/Login.vue'
// eslint-disable-next-line 
import Settingsingar from './views/Settingsingar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Startsida.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      // Det funkar så rör ej!!
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settingsingar.vue') //Fråga inte...
    }
    
  ]
})
