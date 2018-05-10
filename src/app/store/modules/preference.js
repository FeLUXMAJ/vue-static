const state = {
  locale: localStorage.getItem('locale') || 'en',
  locales: ['en', 'cn'],
}

const getters = {
}


const actions = {
  'preference-locale-change': function ({commit, dispatch}) {
    return new Promise((resolve, reject) => {
      commit('preference-locale-change')
      resolve()
    })
  },
}

const mutations = {
  'preference-locale-change': function (state) {
    let i = state.locales.indexOf(state.locale)
    if (i === state.locales.length - 1) {
      i = 0
    } else {
      i += 1
    }
    state.locale = state.locales[i]
    localStorage.setItem('locale', state.locale)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
