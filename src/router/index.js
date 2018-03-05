import Vue from 'vue'
import Router from 'vue-router'
import guide from '../components/guide';
import search from '../components/search.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
