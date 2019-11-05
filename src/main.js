import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
