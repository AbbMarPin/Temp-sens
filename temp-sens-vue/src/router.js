import Vue from 'vue'
import Router from 'vue-router' //vvv ignorerar fel
// eslint-disable-next-line 
import Home from './views/Home.vue'
// eslint-disable-next-line 
import Login from './views/Login.vue'
// eslint-disable-next-line 
import Settings from './views/Settings.vue'
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
      path: '/',
      name: 'Tabell',
      component: () => import('./components/Tabell.vue')
    },
     {
       path: '/1',
       name: 'TempNU',
       component: () => import('./views/TempNU.vue')
     },
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
      path: '/f75778f7425be4db0369d09af37a6c2b9a83dea0e53e7bd57412e4b060e607f7',
      name: 'Adminpage',
      component: () => import('./views/Adminpage.vue')
    },
    {
      path: '/cdiuevcvao47rf483ofdsva4o377fvcoe478avfov8asevfserg',
      name: 'Manage',
      component: () => import('./views/Manage.vue')
    },
    {
      // Det funkar så rör ej!!
      path: '/Settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue') //Fråga inte...
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
