import Vue from 'vue'
import { i18n } from './I18n';
import { store } from './store/store';
import routerFunc from './router';
import { firestorePlugin } from 'vuefire';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App';

let router = routerFunc(store);

Vue.use(firestorePlugin);

//mixins
Vue.mixin({
  methods: {
    AlphaNumCheck(str) {
      return str && str.match("^[a-zA-Z0-9_]*$");
    },
    NumCheck(str) {
      return str && str.match("^[0-9]*$");
    }
  }
});

const requireComponent = require.context(
    './components/base',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
      camelCase(
          fileName
              .split('/')
              .pop()
              .replace(/\.\w+$/, '')
      )
  )

  Vue.component(
      componentName,
      componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  i18n,
  store: store,
  render: h => h(App)
}).$mount('#app');