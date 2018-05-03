// <template>
import template from './top-bar.html!text'
// </template>

export default {
  template,
  name: 'TopBar',
  data () {
    return {
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('auth-logout', { })
        .then(() => {
          this.$router.push({
            path: '/login',
            query: {redirect: this.$route.path}
          })
        })
    }
  }
}

// <style>
import './top-bar.css!css'
// </style>

