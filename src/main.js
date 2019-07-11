import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponents from './utils/globalComponents'

Vue.config.productionTip = false
Vue.use(GlobalComponents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
