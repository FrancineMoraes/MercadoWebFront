<template>
  <div>
    <b-button variant="success" @click="show" style="width: 75px;" >Adicionar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Adicionar Usuário</h2>

      <form slot="content">
          <input type="text" placeholder="usuario"  v-model="login.nome" required>
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
            nome           :  null,
            senha             :  null,
         },
      };
  },
  methods:{   
    reset(){
      this.nome           =  ''
      this.senha             =  ''
    },

    el(){
        this.route = 'admin/usuario';
        this.datas = JSON.stringify({
        nome         :  this.login.nome,
        senha        :  this.login.senha,
      })
    }
  },   
}   
    
</script>