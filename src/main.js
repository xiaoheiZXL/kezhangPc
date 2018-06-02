import Vue from 'vue'
import App from './App'
import router from './router'
require("babel-polyfill");
//flexible自适应
import '../static/flexible.js'

// common.css
import '../static/common.css'

// animate.css
import '../static/animate.css';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
