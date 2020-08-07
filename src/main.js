import Vue from 'vue';
import VueRellax from 'vue-rellax';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRellax);
new Vue({
  render: h => h(App),
}).$mount('#app')
