import Vue from 'vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import Main from './main'
import './plugins'

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<Main/>',
  components: { Main }
})

