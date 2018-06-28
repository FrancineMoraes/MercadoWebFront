 <template>
     <div>

      <b-button variant="danger" @click="show" >Excluir</b-button>

      <modal v-if="showModal" @show="show()">
            <h1 slot="header">Remover Usuario</h1>

            <form slot="content">
                <input type="text"  :value="usuario"           readonly>
                <input type="text"  :value="senha"             readonly>
            </form>

            <div slot="footer">
                <b-button type="submit" @click.prevent="handleDelete" > Remover </b-button>
                <b-button @click="showModal = false">Cancelar</b-button>
            </div>
      </modal>

    </div>
  </template>

<script>
import Modal from '../UIComponents/Modal'
import { url } from '../mixins/url.js'
import { showModal } from '../mixins/Modal.js'
import { del } from '../mixins/del.js'

export default {
    
  name: "Delete",
  
  components: { Modal },
  
  mixins: [ url, showModal, del] ,
  
  data() {
    return {
      usuario: "",
      senha: '',
      id: ''
    };
  },

  methods:{
    el(){
      this.route = '/login/';
      this.datas = JSON.stringify({
        id: this.id,
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (login) => {
        this.usuario = login.usuario
        this.senha = login.senha;
        this.id = login.id;

        console.log('========================== delete  ==============================');
        console.log('delete parametro ==> ' + login.usuario)
        console.log( 'delete res name  ===> ' + this.usuario)
      });
  },
}
</script>