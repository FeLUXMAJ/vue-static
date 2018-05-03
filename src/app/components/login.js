// <template>
import template from './login.html!text'
// </template>

export default {
  template,
  data () {
    return {
      email: 'admin',
      password: 'admin',
      errormsg: '',
      failcount: 0,
    }
  },
  methods: {
    login: function () {
      this.errormsg = 'Trying to login...'
      const { email, password } = this
      this.$store.dispatch('auth-login', { email, password })
        .then(() => {
          this.$router.replace(this.$route.query.redirect || '/home')
        })
        .catch(() => {
          this.failcount += 1
          this.errormsg = 'Failed to login (' + this.failcount + ')'
        })
    }
  }
}
