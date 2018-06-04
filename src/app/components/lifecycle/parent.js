// <template>
import template from './parent.html!text'
// </template>

// <script>
import Child from './child'
import { getFunctionName } from '../../utils/utils'
export default {
  template,
  name: 'Parent',
  components: {
    Child
  },
  beforeCreate () {
    console.log(this.$options.name + getFunctionName())
  },
  created () {
    console.log(this.$options.name + getFunctionName())
  },
  beforeMount () {
    console.log(this.$options.name + getFunctionName())
  },
  mounted () {
    console.log(this.$options.name + getFunctionName())
  },
  beforeUpdate () {
    console.log(this.$options.name + getFunctionName())
  },
  updated () {
    console.log(this.$options.name + getFunctionName())
  },
  activated () {
    console.log(this.$options.name + getFunctionName())
  },
  deactivated () {
    console.log(this.$options.name + getFunctionName())
  },
  beforeDestroy () {
    console.log(this.$options.name + getFunctionName())
  },
  destroyed () {
    console.log(this.$options.name + getFunctionName())
  },
  errorCaptured () {
    console.log(this.$options.name + getFunctionName())
  },
}
// </script>

// <style>
import './parent.css!css'
// </style>

