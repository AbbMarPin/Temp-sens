import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
<<<<<<< Updated upstream
=======
import vueImagefill from 'vue-imagefill'
import 'vue-imagefill/src/style/vue-imagefill.css'
import Chart from 'chart.js'
Vue.use(vueImagefill)

>>>>>>> Stashed changes
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = fals

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')