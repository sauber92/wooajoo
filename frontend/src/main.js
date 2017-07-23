/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

