import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

export const serverBus = new Vue();
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')