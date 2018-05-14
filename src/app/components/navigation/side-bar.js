// <template>
import template from './side-bar.html!text'
// </template>

export default {
  template,
  name: 'SideBar',
  data () {
    return {
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    },
    rs () {
      return this.$router.options.routes
        .map(r => r.path)
        .sort((r1, r2) => r1 > r2)
    }
  }
}

// <style>
import './side-bar.css!css'
// </style>

