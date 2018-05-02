import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import CreateProducts from '@/components/crudProducts/CreateProducts'
import ListProducts from '@/components/crudProducts/ListProducts'
import Signin from '@/components/login/Signin'
import NotFound from '@/components/GeneralViews/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/login'
    },

    {
      path: '/cadastro',
      name: 'cadastro',
      component: CreateProducts
    },

    {
      path: '/login',
      name: 'Signin',
      component: Signin
    },

    {
      path: '/listProducts',
      name: 'ListProducts',
      component: ListProducts
    },

    //notfound
    {path: '*', component: NotFound}
  ]
})
