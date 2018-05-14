// <template>
import template from './main.html!text'
// </template>

import TopBar from './components/navigation/top-bar'
import SideBar from './components/navigation/side-bar'
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

