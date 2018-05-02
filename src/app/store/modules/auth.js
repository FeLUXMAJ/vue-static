import { getCookie, setCookie, removeCookie } from 'tiny-cookie'
import axios from 'axios'

const state = {
  token: getCookie('token') || '',
}

const getters = {
  loggedIn: state => !!state.token,
}


const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
