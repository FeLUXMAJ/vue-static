// <template>
import template from './top-bar.html!text'
// </template>

// <script>
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
    },
    locale () {
      return this.$store.state.preference.locale
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth-logout', { })
        .then(() => {
          this.$router.push({
            path: '/login',
            query: {redirect: this.$route.path}
          })
        })
    },
    changeLocale (event) {
      this.$store.dispatch('preference-locale-change')
    }
  }
}
// </script>

// <style>
import './top-bar.css!css'
// </style>

