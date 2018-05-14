// <template>
import template from './loading-bar.html!text'
// </template>

// <script>
export default {
  template,
  name: 'LoadingBar',
  data () {
    return {
    }
  },
  computed: {
    value () {
      return this.$store.state.progress.value
    },
    buffer () {
      return this.$store.state.progress.buffer
    }
  },
}
// </script>

// <style>
import './loading-bar.css!css'
// </style>
