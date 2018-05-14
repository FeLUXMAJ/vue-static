import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import PageNotFound from '../components/page-not-found'
import DateTimePickerDemo from '../components/date-time-picker/date-time-picker-demo'
import Login from '../components/login'
import Hello from '../components/hello'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (store.getters.loggedIn) {
    next()
  } else {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
}

const routes = [
  {
    path: '/login',
    component: Login,
    beforeEnter: function (to, from, next) {
      if (store.getters.loggedIn) {
        next('/home')
      } else {
        next()
      }
    },
  },
  {
    path: '/home',
    component: Hello,
    beforeEnter: requireAuth,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/date-time-picker-demo',
    component: DateTimePickerDemo,
  },
  {
    path: '/page-not-found',
    component: PageNotFound,
    beforeEnter: requireAuth,
  },
  {
    path: '*',
    redirect: '/page-not-found',
  }
]

export default new Router({
  routes
})
