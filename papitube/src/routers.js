import detail from './components/detail.vue'
import Index from './components/index.vue'

const routers = [
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/index',
    component: Index
  }
]
export default routers
