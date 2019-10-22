//hover over

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
      disabled: false,
      openDelay: '0',
      closeDelay: '0',
      value: false,
    }),
  })

  //


//Darkmode

// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
  },
})