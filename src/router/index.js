import Vue from 'vue'
import Router from 'vue-router'
import guide from '../components/guide'
import search from '../components/subcom/search.vue'
import item from '../components/subcom/item.vue'
import author from '../components/subcom/author.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/',
      name: 'guide',
      component: guide
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path:'/author',
      name:'author',
      component:author
    }
  ]
})
