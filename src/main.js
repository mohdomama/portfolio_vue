// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueHead from 'vue-head'
import { sync } from 'vuex-router-sync'
import VueParticles from 'vue-particles'

import App from './App'
import router from './router'
import { store } from './store'
import urls from './urls'

sync(store, router)
Vue.use(Vuetify)
Vue.use(VueHead)
Vue.use(VueParticles)
Vue.config.productionTip = false

Vue.prototype.$urls = urls

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
