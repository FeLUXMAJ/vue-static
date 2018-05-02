import Vue from 'vue'
import router from './router'
import store from './store'
import Main from './main'

new Vue({
  el: '#app',
  router,
  store,
  template: '<Main/>',
  components: { Main }
})

import { setCookie } from 'tiny-cookie'
setCookie('token', 'vue-token')
