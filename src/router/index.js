import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Signup from '@/components/login/Signup'
import Signin from '@/components/login/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
