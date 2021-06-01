import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'
import VueStar from 'vue-star'



Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('VueStar', VueStar)

new Vue({
  render: h => h(App),
}).$mount('#app')
