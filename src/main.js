import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resetcss from '../node_modules/reset-css/reset.css'
import mdi from '../node_modules/material-icons/'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
