<template>
  <div>

    <b-button variant="warning" @click="show" >Editar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Editar Usuário</h2>

      <form slot="content" class="form-admin-modal">
          <input type="text" v-model="nome" placeholder="usuario" required>
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
            nome: "",
            senha: '',
            id: '',
            datas: '',
      };
    },

    created() {
    this.showModal = false;
    this.$bus.$on("objectEmited", (login) => {
        this.nome = login.nome;
        this.senha = login.senha;
        this.id = login.id;
        
        console.log('========================== edit  ==============================');
        console.log('parametro ====> ' + login.nome)
        console.log('res  =====> ' + this.nome) 
     });
    },

    methods: {
        el(){
        this.route = 'admin/usuario/',
        this.datas = JSON.stringify({
            id: this.id,
            nome: this.nome,
            senha: this.senha,
        })
            console.log('datassss edit nessa caralhaaaaa' + this.datas);
        },
    }
}
</script>