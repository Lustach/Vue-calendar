import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resetcss from '../node_modules/reset-css/reset.css'
import mdi from '../node_modules/material-icons/'
import Vuex from 'vuex'
// import store from './store'
Vue.config.productionTip = false
Vue.use(Vuex);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
