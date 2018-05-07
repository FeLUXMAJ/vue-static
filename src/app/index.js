import Vue from 'vue'
import router from './router'
import store from './store'
import Main from './main'
import './plugins'

new Vue({
  el: '#app',
  router,
  store,
  template: '<Main/>',
  components: { Main }
})

