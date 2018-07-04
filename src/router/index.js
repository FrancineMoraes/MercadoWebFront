import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import ListProducts from '@/components/Products/ListProducts'
import ListUsers from '@/components/Users/ListUsers'
import Signin from '@/components/Login/Signin'
import NotFound from '@/components/GeneralViews/NotFoundPage'
import SearchBox from '@/components/Products/SearchBox'
import Search from '@/components/Users/Search'
import Venda from '@/components/Venda/Venda'

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
      path: '/venda',
      name: 'Venda',
      component: Venda
    },

    {
      path: '/produtos/busca',
      name: 'SearchBox',
      component: SearchBox
    },

    {
      path: '/usuarios',
      name: 'ListUsers',
      component: ListUsers
    },

    {
      path: '/login',
      name: 'Signin',
      component: Signin
    },

    {
      path: '/produtos',
      name: 'ListProducts',
      component: ListProducts
    },

    {
      path:'/usuarios/busca',
      name: 'Search',
      component: Search
    },
    //notfound
    {path: '*', component: NotFound},
  ]
})
