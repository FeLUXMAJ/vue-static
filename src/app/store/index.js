import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import preference from './modules/preference'
import progress from './modules/progress'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    preference,
    progress,
  },
  strict: true
})

