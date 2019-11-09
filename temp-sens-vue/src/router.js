import Vue from 'vue'
import Router from 'vue-router' //vvv ignorerar fel
// eslint-disable-next-line 
import Home from './views/Home.vue'
// eslint-disable-next-line 
import Login from './views/Login.vue'
// eslint-disable-next-line 
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',                                             //sökväg
      name: 'Tabell',                                        //namn
      component: () => import('./components/Tabell.vue')     //Hämta från komponent
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
      path: '/Settings',
      name: 'Settings',
      component: () => import('./views/Settings.vue')
    },
   
  ]
})
