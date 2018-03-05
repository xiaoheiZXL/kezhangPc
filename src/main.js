import Vue from 'vue'
import App from './App'
import router from './router'

//flexible自适应
import '../static/flexible.js'

// common.css
import '../static/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
