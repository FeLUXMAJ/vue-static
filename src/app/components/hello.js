// <template>
import template from './hello.html!text'
// </template>

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

