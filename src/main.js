import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middleware from './middleware'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

window.$ = window.jQuery = global.$ = global.jQuery = require("jquery")
require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/app.css';
import './assets/js/app.js';

new Vue({
  router,
  middleware,
  store,
  render: h => h(App)
}).$mount('#app')
