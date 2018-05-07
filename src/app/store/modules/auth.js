import { getCookie, setCookie, removeCookie } from 'tiny-cookie'
import axios from 'axios'
import CONSTANTS from '../../constants'

const state = {
  token: getCookie('token') || '',
  userid: '',
  attempts: 0,
}

const getters = {
  loggedIn: state => !!state.token,
}


const actions = {
  'auth-login': function ({commit, dispatch}, data) {
    return new Promise((resolve, reject) => {
      // mock login
      state.attempts += 1
      if (state.attempts % 2) {
        commit('auth-failure')
        reject('auth-failure')
      } else {
        const r = {
          method: 'get',
          url: CONSTANTS.AUTH_URL,
        }
        axios.request(r).then(resp => {
          const { token, user } = resp.data
          commit('auth-success', { token, user })
          resolve()
        }).catch(err => {
          commit('auth-failure')
          reject(err)
        })
      }
    })
  },
  'auth-logout': function ({commit, dispatch}) {
    return new Promise((resolve, reject) => {
      commit('auth-failure')
      resolve()
    })
  }
}

const mutations = {
  'auth-success': function (state, data) {
    const { token, user } = data
    if (token && user) {
      state.token = token
      state.userid = user
      setCookie('token', token)
    } else {
      state.token = 'defaulttoken'
      state.userid = 'defaultuser'
      setCookie('token', state.token)
    }
  },
  'auth-failure': function (state) {
    state.token = ''
    state.userid = ''
    removeCookie('token')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
