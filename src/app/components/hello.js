// <template>
import template from './hello.html!text'
// </template>

// <script>
export default {
  template,
  name: 'Hello',
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
// </script>

// <style>
import './hello.css!css'
// </style>

