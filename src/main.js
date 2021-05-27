import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'

Vue.config.productionTip = false
Vue.use(FlagIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
