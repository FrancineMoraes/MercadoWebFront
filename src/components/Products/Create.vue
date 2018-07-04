<template>
  <div>
    <b-button variant="success" @click="show" >Adicionar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Adicionar Produto</h2>

      <form slot="content">
          <input type="text" placeholder="Nome"  v-model="produto.nome" required>
          <input type="text" placeholder="Codigo de barra"  v-model="produto.codigoDeBarra" required>
          <input type="text" placeholder="Estoque"  v-model="produto.estoque">
          <input type="text" placeholder="Valor por unidade" v-model="produto.valorUn">
      </form>

      <div slot="footer">
          <b-button type="submit" @click.stop.prevent="onSubmit"> Adicionar </b-button>
          <b-button @click="cancel"> Cancelar </b-button>
      </div>

    </modal>

  </div>
</template>

<script>
import Modal from '../UIComponents/Modal'
import { url } from '../mixins/url.js'
import { showModal } from '../mixins/Modal.js'
import { create } from '../mixins/create.js'
export default {
  name: 'Create',

  components: { Modal },
  
  mixins: [ showModal, url, create ],
  
  data(){
      return{
          produto: {
            nome           :  null,
            codigoDeBarra  :  null,
            estoque        :  null,
            valorUn        :  null,
         },
      };
  },
  methods:{   
    reset(){
      this.nome           =  ''
      this.codigoDeBarra  =  ''
      this.estoque        =  ''
      this.valorUn        =  ''
    },

    el(){
        this.route = 'admin/produto';
        this.datas = JSON.stringify({
        nome          :  this.produto.nome,
        codigoDeBarra :  this.produto.codigoDeBarra,
        estoque       :  this.produto.estoque,
        valorUn         :  this.produto.valorUn,
      })
    }
  },   
}   
    
</script>