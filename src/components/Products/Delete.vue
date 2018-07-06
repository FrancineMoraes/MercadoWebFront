 <template>
     <div>

      <b-button variant="danger" @click="show" >Excluir</b-button>

      <modal v-if="showModal" @show="show()">
            <h1 slot="header">Remover Produto</h1>

            <form slot="content">
                <input type="text"  :value="nome"           readonly>
                <input type="text"  :value="codigoDeBarra"  readonly>
                <input type="text"  :value="estoque"        readonly>
                <input type="text"  :value="valorUn"        readonly>
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
      nome: "",
      codigoDeBarra: '',
      estoque: '',
      valorUn: '',
      id: ''
    };
  },

  methods:{
    el(){
      this.route = 'admin/produto/';
      this.datas = JSON.stringify({
        id: this.id,
      })
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (prod) => {
        this.nome = prod.nome
        this.codigoDeBarra = prod.codigoDeBarra;
        this.estoque = prod.estoque;
        this.valorUn = prod.valorUn;
        this.id = prod.id;

        console.log('========================== delete  ==============================');
        console.log('delete parametro ==> ' + prod.nome)
        console.log( 'delete res name  ===> ' + this.nome)
      });
  },
}
</script>