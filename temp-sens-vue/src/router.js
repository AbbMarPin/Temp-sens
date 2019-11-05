import Vue from 'vue'
import Router from 'vue-router' //vvv ignorerar fel
// eslint-disable-next-line 
import Home from './views/Home.vue'
// eslint-disable-next-line 
import Login from './views/Login.vue'
// eslint-disable-next-line 
import Settingsingar from './views/Settingsingar.vue'
//  eslint-disable-next-line 
// import Vardagsrummet from './views/Diagram/Vardagsrummet.vue'
// eslint-disable-next-line 
//import Vardagsrummet from './views/Diagram/Vardagsrummet.vue'
// // eslint-disable-next-line 
// import Pingisrummet from './views/Diagram/Pingisrummet.vue'
// // eslint-disable-next-line 
// import Terrariet from './views/Diagram/Terrariet.vue'
// // eslint-disable-next-line 
// import Klassrummet from './views/Diagram/Klassrummet.vue'
// // eslint-disable-next-line 
// import Hallonrummet from './views/Diagram/Hallonrummet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/Registrera',
      name: 'Registrera',
      component: () => import('./views/Registrera.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/Adminpage',
      name: 'Adminpage',
      component: () => import('./views/Adminpage.vue')
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: () => import('./views/Manage.vue')
    },
    {
      // Det funkar så rör ej!!
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settingsingar.vue') //Fråga inte...
    },
    // {
    //   path: '/Vardagsrummet',
    //   name: 'Vardagsrummet',
    //   component: () => import('./views/Diagram/Vardagsrummet.vue')
    // },
    // {
    //   path: '/Pingisrummet',
    //   name: 'Pingisrummet',
    //   component: () => import('./views/Diagram/Pingisrummet.vue')
    // },
    // {
    //   path: '/Terrariet',
    //   name: 'LogTerrarietin',
    //   component: () => import('./views/Diagram/Terrariet.vue')
    // },
    // {
    //   path: '/Klassrummet',
    //   name: 'Klassrummet',
    //   component: () => import('./views/Diagram/Klassrummet.vue')
    // },{
    //   path: '/Hallonrummet',
    //   name: 'Hallonrummet',
    //   component: () => import('./views/Diagram/Hallonrummet.vue')
    // }
  ]
})
