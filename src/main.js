import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App';
import Home from './components/Home';
import Prices from './components/Prices';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/prices', component: Prices}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');