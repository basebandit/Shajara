// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import Nprogress from 'nprogress'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
// Material Design icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Font-awesome
import 'font-awesome/css/font-awesome.css'
// nprogress
import 'nprogress/nprogress.css'
import '@/assets/scss/style.scss'
import miniToastr from 'mini-toastr'
import VueNotifications from 'vue-notifications'

function toast ({ title, message, type, timeout, callback }) {
  return miniToastr[type](message, title, timeout, callback)
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

// Navigation Guards before each
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})
// Navigation guard after each
router.afterEach((to, from) => {
  Nprogress.done()
})
miniToastr.init({ types: toastTypes })
Vue.use(VueNotifications, options)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
