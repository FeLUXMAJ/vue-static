// <template>
import template from './parent.html!text'
// </template>

// <script>
const Child = () => {
  console.error('debug')
  return import('./child')
}
export default {
  template,
  name: 'Parent',
  components: {
    Child
  },
}
// </script>

// <style>
import './parent.css!css'
// </style>

