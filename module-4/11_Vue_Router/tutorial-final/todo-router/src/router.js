import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Personal from '@/views/Personal'
import Work from '@/views/Work'
import House from '@/views/House'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/house',
      name: 'house',
      component: House
    }
  ]
})
