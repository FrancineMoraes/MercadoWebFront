 <template>
     <div>

      <b-button variant="danger" @click="show" >Excluir</b-button>

      <modal v-if="showModal" @show="show()">
            <h1 slot="header">Remover Produto</h1>

            <form slot="content">
                <input type="text"  :value="cupom.produto.nome"           readonly>
                <input type="text"  :value="cupom.produto.codigoDeBarra"  readonly>
                <input type="text"  :value="cupom.quantVendida"           readonly>
                <input type="text"  :value="cupom.valorProduto"           readonly>
            </form>

            <div slot="footer">
                <b-button type="submit" @click.prevent="handleDelete2" > Remover </b-button>
                <b-button @click="showModal = false">Cancelar</b-button>
            </div>
      </modal>

    </div>
  </template>

<script>
import Modal from '../../UIComponents/Modal'
import { url } from '../../mixins/url.js'
import { showModal } from '../../mixins/Modal.js'
import { del } from '../../mixins/del.js'

export default {
    
  name: "Delete",
  
  components: { Modal },
  
  mixins: [ url, showModal, del] ,
  
  data() {
    return {
      cupom: {
          
          id:{
            produto_id: null,
            cupom_id: null
          },

          quantVendida: null,
          valorProduto: null,
          
          produto:{
            id: null,
            nome: null,
            codigoDeBarra: null,
            estoque: null,
            valorUn: null
          }

        }
    };
  },

  methods:{
    el(){
      this.route = '/cupom/';
      this.datas = JSON.stringify({
          id: this.cupom.id.cupom_id,
          id2: this.cupom.id.produto_id
      })
    
    this.$bus.$emit('removendo', this.cupom.valorProduto)
    }
  },

  created(){
    this.showModal = false;
    this.$bus.$on("objectEmited", (itens) => {
        this.cupom.produto.nome          = itens.produto.nome
        this.cupom.produto.codigoDeBarra = itens.produto.codigoDeBarra;
        this.cupom.quantVendida          = itens.quantVendida;
        this.cupom.valorProduto          = itens.valorProduto;
        this.cupom.id                    = itens.id;
      });
  },
}
</script>