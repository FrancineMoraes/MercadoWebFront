<template>
    <div>
        <div class="description">
            <label for="nome">Descrição do produto: </label>
            <input type="text" name="nome" :value="cupom.produto.nome" readonly >
            <br><br><br>
        </div>

        <div class="pai">
            <div class="inputs">
                <label for="codigoDeBarra">Código de Barra: 
                <input type="text" name="codigoDeBarra" 
                v-model="cupom.produto.codigoDeBarra">
                </label>
                  <button type="submit" class="bbtn" @click="getProd"></button>
        
                <label for="estoque">Quantidade: 
                  <input type="text" name="estoque" v-model="cupom.quantVendida">
                </label>

                <label for="valorUn">Valor unitário: 
                  <input type="text" name="valorUn" :value="cupom.produto.valorUn">
                </label>

                <button type="submit" class="bbtn" @click.stop.prevent="onSubmit" 
                  @click="counter(), counterPrice(), reset()">
                </button>
            </div>

            <List/>
        </div>
    </div>
</template>


<script>
import { url } from '../../mixins/url.js'
import axios from 'axios'
import { create } from '../../mixins/create.js'
import List from './List'

export default {
  
  mixins: [ url, create ],

  components: { List },

    data () {
      return {
        count: null,
        countPrice: null,

        cupom: {
          
          cupomId:{
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
      }
    },

    methods:{
      getProd(){
        var newurl = this.url + 'admin/produto/barra/' + this.cupom.produto.codigoDeBarra;
        
        axios
        .get(newurl)
        .then(response => {
          let produtos = response.data;

          for (let i = 0; i < produtos.length; i++) {
            this.cupom.produto = produtos[i];
          }
          
          console.log(this.cupom.produto)

        }).catch(error => {
          console.log(error)
        })
      },

      reset(){
        this.cupom.produto.codigoDeBarra  =  ''
        this.cupom.quantVendida           =  ''
        this.cupom.produto.valorUn        =  ''
        this.cupom.produto.nome           =  ''
    },

      el(){
        this.route = 'admin/cupom';
        this.datas = JSON.stringify({
          
          cupomId:{
            produto_id:    this.cupom.produto.id,
          },
          
          quantVendida:    this.cupom.quantVendida,
          valorProduto:    this.cupom.produto.valorUn,

          produto:{
            id:            this.cupom.produto.id,
            nome:          this.cupom.produto.nome,
            codigoDeBarra: this.cupom.produto.codigoDeBarra,
            estoque:       this.cupom.produto.estoque,
            valorUn:       this.cupom.produto.valorUn
          }
        });
      },

      counter(){
            this.count = this.count + 1;
            this.$bus.$emit('increment', this.count)
      },

      counterPrice(){
          this.countPrice = this.countPrice + (this.cupom.produto.valorUn * this.cupom.quantVendida)
          this.$bus.$emit('countPrice', this.countPrice.toFixed(2))
      }

  },
  
}
</script>


<style>
.pai
{
    display: flex;
    flex-direction: row;
    align-content: space-around;
    margin-left: 15em;
    height: 55vh;
    max-height: 55vh;
    overflow: auto;
}

.inputs
{
    width: 15%;
    position: absolute;
    margin-left: -10%;
}

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  padding: 0;
  width: 70%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }


}

.bbtn{
  color: transparent;
  border: none;
  background: transparent;
  box-shadow: none;
}

.description
{
  width: 56%;
  margin: 0 26.4em;
}
</style>
