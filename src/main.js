import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App';
import Home from './components/Home';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Login from './components/Login';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/prices', component: Prices},
    { path: '/contact', component: Contact},
    { path: '/login', component: Login}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');