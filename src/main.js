import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.$ = window.jQuery = global.$ = global.jQuery = require("jquery")
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/app.css'
import './assets/js/app.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
