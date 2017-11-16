import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import author from '@/components/author'
import mine from '@/components/mine'
import broadlist from '@/components/broadlist'
import detail from '@/components/detail'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/broadlist',
      name: 'broadlist',
      component: broadlist
    },
    {
      path: '/author',
      name: 'author',
      component: author
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
