import Vue from 'vue'
import Router from 'vue-router'
import guide from '../components/guide'
import search from '../components/subcom/search.vue'
import item from '../components/subcom/item.vue'
import author from '../components/subcom/author.vue'
import authorWork from '../components/subcom/author-work.vue'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: '/pc',
  routes: [{
    path: '/item/:stampId',
    name: 'item',
    component: item
  }, {
    path: '/',
    name: 'guide',
    component: guide
  }, {
    path: '/search',
    name: 'search',
    component: search
  }, {
    path: '/author/:authorId',
    name: 'author',
    component: author
  }, {
    path: '/author-work/:authorId',
    name: 'author-work',
    component: authorWork,
    meta: {
      keepAlive: true // true 表示需要使用缓存
    }
  }]
})
// router.beforeEach((to, from, next) => {
//   console.log('to---'+to.name);
//   console.log('from ---- '+from.name);
//   next()
// })

export default router