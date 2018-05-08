const state = {
  value: 0.33,
  buffer: 0.66,
}

const getters = {
}


const actions = {
  'progress-update': function ({commit, dispatch}, data) {
    return new Promise((resolve, reject) => {
      const { value } = data
      commit('progress-update', { value })
      resolve()
    })
  },
  'progress-buffer-update': function ({commit, dispatch}, data) {
    return new Promise((resolve, reject) => {
      const { value } = data
      commit('progress-buffer-update', { value })
      resolve()
    })
  }
}

const mutations = {
  'progress-update': function (state, data) {
    state.value = data.value
  },
  'progress-buffer-update': function (state, data) {
    state.buffer = data.value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
