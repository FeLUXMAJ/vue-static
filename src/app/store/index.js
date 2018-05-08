import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import progress from './modules/progress'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    progress,
  },
  strict: true
})

