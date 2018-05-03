import Vue from 'vue'
import router from './router'
import store from './store'
import VueUi from '@vue/ui'
import Main from './main'
import '../lib/github.com/vuejs/ui/0.2.5/vue-ui.css!css'

Vue.use(VueUi)

new Vue({
  el: '#app',
  router,
  store,
  template: '<Main/>',
  components: { Main }
})

