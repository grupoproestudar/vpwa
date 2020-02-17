/* eslint-disable no-new */

import Vue from 'vue'
import App from './App'
import router from './routers/router'
import BootstrapVue from 'bootstrap-vue'
import VueFirestore from 'vue-firestore'
import Loading from 'vue-loading-overlay'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFirestore)
Vue.use(Loading, {
  canCancel: false,
  color: '#e5ca2c',
  backgroundColor: '#0f063f'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
