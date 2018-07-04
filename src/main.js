// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css';
import 'styles/reset.css'
import 'styles/border.css'
import router from './router'
import VueResource from 'vue-resource'
// import store from './storeVuex'
import ElementUI from 'element-ui';
import animate from "animate.css";

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
