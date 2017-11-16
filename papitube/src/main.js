// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import viewport from './assets/viewport.js'
import route from './routers.js'
Vue.prototype.viewport = viewport

Vue.use(VueRouter)

Vue.config.productionTip = false

const routers = new VueRouter({
  mode: 'history',
  routes: routers
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

