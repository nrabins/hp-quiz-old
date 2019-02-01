import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: () => import('./views/Quiz.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('./views/Quiz.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./views/Results.vue')
    }
  ]
})
