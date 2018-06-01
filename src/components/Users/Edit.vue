<template>
  <div>

    <b-button variant="primary" @click="show" >Editar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Editar Usuário</h2>

      <form slot="content" class="form-admin-modal">
          <input type="text" v-model="usuario" placeholder="usuario" required>
          <input type="text" v-model="senha" placeholder="senha">
        </form>

        <div slot="footer">
            <b-button type="submit" @click.prevent="handleEdit">Confirmar</b-button>
            <b-button @click="showModal = false">Cancelar</b-button>
        </div>
    </modal>

  </div>
</template>


<script>
import Modal from '../UIComponents/Modal'
import { showModal } from '../mixins/Modal.js'
import { url } from '../mixins/url.js'
import { edit } from '../mixins/edit.js'

export default {
  name: "Edit",

  components: { Modal },

    mixins: [ url, showModal, edit ],

    data() {
        return {
            usuario: "",
            senha: '',
            id: '',
            datas: '',
      };
    },

    created() {
    this.showModal = false;
    this.$bus.$on("objectEmited", (login) => {
        this.usuario = login.usuario;
        this.senha = login.senha;
        this.id = login.id;
        
        console.log('========================== edit  ==============================');
        console.log('parametro ====> ' + login.usuario)
        console.log('res  =====> ' + this.usuario) 
     });
    },

    methods: {
        el(){
        this.route = '/login/',
        this.datas = JSON.stringify({
            id: this.id,
            usuario: this.usuario,
            senha: this.senha,
        })
            console.log('datassss edit nessa caralhaaaaa' + this.datas);
        },
    }
}
</script>