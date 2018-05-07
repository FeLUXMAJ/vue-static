System.config({
  transpiler: 'plugin-babel',
  map: {
    'plugin-babel': 'lib/unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'systemjs-babel-build': 'lib/unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
    'axios': 'lib/github.com/axios/axios/0.18.0/axios.min.js',
    'css': 'lib//unpkg.com/systemjs-plugin-css@0.1.37/css.js',
    'text': 'lib/unpkg.com/systemjs-plugin-text@0.0.11/text.js',
    'tiny-cookie': 'lib/unpkg.com/tiny-cookie@2.1.2/lib/index.js',
    'vue': /localhost/.test(window.location.host) ? 'lib/unpkg.com/vue@2.5.16/dist/vue.js' : 'lib/unpkg.com/vue@2.5.16/dist/vue.min.js',
    'vue-material': 'lib/unpkg.com/vue-material@1.0.0-beta-8/dist/vue-material.min.js',
    'vue-router': 'lib/unpkg.com/vue-router@3.0.1/dist/vue-router.min.js',
    'vuex': 'lib/unpkg.com/vuex@3.0.1/dist/vuex.min.js',
    '@vue/ui': 'lib/github.com/vuejs/ui/0.2.5/vue-ui.min.js',
  },
  packages: {
    'lib': {
      defaultExtension: 'js',
    },
    'app': {
      defaultExtension: 'js',
      main: 'index.js'
    },
    'app/constants': {
      defaultExtension: 'js',
      main: 'index.js'
    },
    'app/router': {
      defaultExtension: 'js',
      main: 'index.js'
    },
    'app/store': {
      defaultExtension: 'js',
      main: 'index.js'
    },
    'app/plugins': {
      defaultExtension: 'js',
      main: 'index.js'
    }
  }
})
