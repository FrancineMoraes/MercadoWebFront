<template>
  <div>
    <b-button variant="success" @click="show" >Adicionar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Adicionar Usuário</h2>

      <form slot="content">
          <input type="text" placeholder="Usuario"  v-model="login.usuario" required>
          <input type="text" placeholder="Senha"  v-model="login.senha" required>
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
          login: {
            usuario           :  null,
            senha             :  null,
         },
      };
  },
  methods:{   
    reset(){
      this.usuario           =  ''
      this.senha             =  ''
    },

    el(){
        this.route = '/login';
        this.datas = JSON.stringify({
        usuario      :  this.login.usuario,
        senha        :  this.login.senha,
      })
    }
  },   
}   
    
</script>