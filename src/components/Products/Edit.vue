<template>
  <div>

    <b-button variant="primary" @click="show" >Editar</b-button>

    <modal v-if="showModal" @show="show()">

      <h2 slot="header">Editar Produto</h2>

      <form slot="content" class="form-admin-modal">
          <input type="text" v-model="nome" placeholder="nome" required>
          <input type="text" v-model="codigoDeBarra" placeholder="cdigo de barra">
          <input type="text" v-model="estoque" placeholder="estoque" required>
          <input type="text" v-model="  valorUn" placeholder="valor unitario" required >
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
            codigoDeBarra: '',
            estoque: '',
            valorUn: '',
            id: '',
            datas: '',
      };
    },

    created() {
    this.showModal = false;
    this.$bus.$on("objectEmited", (prod) => {
        this.nome = prod.nome
        this.codigoDeBarra = prod.codigoDeBarra;
        this.estoque = prod.estoque;
        this.valorUn = prod.valorUn;
        this.id = prod.produto_id;
        
        console.log('========================== edit  ==============================');
        console.log('parametro ====> ' + prod.nome)
        console.log('res  =====> ' + this.nome) 
     });
    },

    methods: {
        el(){
        this.route = '/produto/',
        this.datas = JSON.stringify({
            id: this.id,
            nome: this.nome,
            codigoDeBarra: this.codigoDeBarra,
            estoque: this.estoque,
            valorUn: this.valorUn
            
        })
            console.log('datassss edit nessa caralhaaaaa' + this.datas);
        },
    }
}
</script>