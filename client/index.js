import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

sync(store, router)
const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
