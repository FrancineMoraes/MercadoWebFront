import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import CreateProducts from '@/components/crudProducts/CreateProducts'
import ListProducts from '@/components/crudProducts/ListProducts'
import Signin from '@/components/login/Signin'
import NotFound from '@/components/GeneralViews/NotFoundPage'
import ListProducts from '@/components/crudProducts/ListProducts'


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
<<<<<<< HEAD
      path: '/listaProdutos',
      name: 'listaProduto',
      component: ListProducts
    },
=======
      path: '/listProducts',
      name: 'ListProducts',
      component: ListProducts
    },


>>>>>>> master
    //notfound
    {path: '*', component: NotFound}
  ]
})
