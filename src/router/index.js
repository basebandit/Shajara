import Vue from 'vue'
import Router from 'vue-router'
import Stats from '@/components/Stats'
import Memory from '@/components/Memory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/event/:title',
      name: 'Memory',
      component: Memory,
      props: true
    }
  ]
})
