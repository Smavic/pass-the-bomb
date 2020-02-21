import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
// eslint-disable-next-line
Vue.prototype.$socket = io.connect("http://localhost:3000")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
