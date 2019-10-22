import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Settingsingar from './views/Settingsingar.vue'
import Vardagsrummet from './views/Diagram/Vardagsrummet.vue'
import Pingisrummet from './views/Diagram/Pingisrummet.vue'
import Terrariet from './views/Diagram/Terrariet.vue'
import Klassrummet from './views/Diagram/Klassrummet.vue'
import Hallonrummet from './views/Diagram/Hallonrummet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('./views/Startsida.vue')
    // },
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
    },
    {
      path: '/Vardagsrummet',
      name: 'Vardagsrummet',
      component: () => import('./views/Diagram/Vardagsrummet.vue')
    },
    {
      path: '/Pingisrummet',
      name: 'Pingisrummet',
      component: () => import('./views/Diagram/Pingisrummet.vue')
    },
    {
      path: '/Terrariet',
      name: 'LogTerrarietin',
      component: () => import('./views/Diagram/Terrariet.vue')
    },
    {
      path: '/Klassrummet',
      name: 'Klassrummet',
      component: () => import('./views/Diagram/Klassrummet.vue')
    },{
      path: '/Hallonrummet',
      name: 'Hallonrummet',
      component: () => import('./views/Diagram/Hallonrummet.vue')
    }
  ]
})
