// <template>
import template from './main.html!text'
// </template>

import TopBar from './components/top-bar'
import SideBar from './components/side-bar'
import LoadingBar from './components/loading-bar'

export default {
  name: 'Main',
  template,
  components: {
    TopBar,
    SideBar,
    LoadingBar,
  }
}

// <style>
import './main.css!css'
// </style>

