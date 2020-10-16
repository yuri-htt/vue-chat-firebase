import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
// @ts-ignore
import VueChatScroll from 'vue-chat-scroll';

import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueChatScroll)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');