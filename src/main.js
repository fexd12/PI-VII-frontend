import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import App from '../src/App.vue'
import routes from './router'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import store from '../src/store'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)
Vue.use(Vuex)

let url = "http://104.198.67.173:2000" // 34.123.16.86
Vue.prototype.$baseUrl = url ;
Vue.axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');
Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

/* eslint-disable no-new */
// eslint-disable-next-line no-new
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')