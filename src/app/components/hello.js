// <template>
import template from './hello.html!text'
// </template>

import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  template,
  data () {
    return {
    }
  },
  computed: {
    msg () {
      return this.$store.state.auth.token
    }
  }
}

// <style>
import './hello.css!css'
// </style>

