import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'doWeekly',
      redirect: 'week'
    },
    {
      path: '/week',
      name: 'week',
      component: require('@/components/Week').default
    },
    {
      path: '/today',
      name: 'today',
      component: require('@/components/Today').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
