// <template>
import template from './main.html!text'
// </template>

import TopBar from './components/top-bar'
import LoadingBar from './components/loading-bar'

export default {
  name: 'Main',
  template,
  components: {
    TopBar,
    LoadingBar,
  }
}

// <style>
import './main.css!css'
// </style>

