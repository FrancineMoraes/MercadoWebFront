import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//=========== state ===========// 
const state = {
//    produto: {
//        nome           :  null,
//        codigoDeBarra  :  null,
//        estoque        :  null,
//        valorUn        :  null,
//     },

    produto: [],

  }

  //=========== mutations ===========//
  const mutations = {

    'SET_PRODUTO'(state, produto) {
        state.produto = produto     
    },

    'ADD_PRODUTO' (state, produtoObject) {       
        state.produto.push (produtoObject)     
    },     
    
    'CLEAR_NEW_PRODUTO' (state) {       
        state.newproduto = ''     
    }

  }

  //=========== actions ===========//
  const actions = {
    'loadProduto' ({ commit }) {
        axios
          .get('http://mercado-web.herokuapp.com/produto')
          .then(r => r.data)
          .then(produto => {
            commit('SET_PRODUTO', produto)
          })
      },

      'addProduto' ({ commit, state }) {
        if (!state.newProduto) {
          // do not add empty produtos
          return
        }
        const produto = {
          title: state.newProduto,
          completed: false,
          //id: randomId()
        }

        axios.post('http://mercado-web.herokuapp.com/produto', produto).then(_ => {
          commit('ADD_PRODUTO', produto)
        })
      },

      'updateProdutos' (context, produto){
        let data = {
          'produto': {
            nome: '',
            codigoDeBarra: '',
            estoque: '',
            valorUn: '',
          }
        }
        console.log(data)
        axios.put('http://mercado-web.herokuapp.com/produto/' + produto.produto_id, data).then( res => {
          console.log( res.data)
        })
      },

      'clearNewTodo' ({ commit }) {
        commit('CLEAR_NEW_PRODUTO')
      }
  }

export default new Vuex.Store({
    state,
    mutations,
    actions, 

    getters: {
        newProduto: state => state.newProduto,
        produto: state => state.produto
      }
    
})