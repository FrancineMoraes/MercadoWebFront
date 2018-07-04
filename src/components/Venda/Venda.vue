<template>
    <div>
        <div style="margin: -60px 0px 0px 0px;">
            <Navbar/>
        </div>
        <div style="margin: 0 auto;">
            <div class="col-sm-12"><br><br></div>
            <Cupom/>
        </div>

        <div class="paizao">

            <div class="esquerda">
                    <div class="itens">
                        <label for="count"> Itens
                            <input type="text" name="count" :value="count" disabled>
                        </label>
                    </div>

                    <div class="total">
                        <label for="valorTotal"> Total
                            <input type="text" name="valorTotal" :value="countPrice" disabled>
                        </label>
                    </div>
            </div>

            <div class="direita">
                <div class="recebido">
                    <label for="valorRecebido"> Valor Recebido
                        <input type="text" name="valorRecebido" v-model="valorRecebido">
                    </label>
                </div>

                <div class="troco">
                    <label for="valorTroco"> Troco
                        <input type="text" name="valorTroco" :value="valorTroco">
                    </label>
                </div>


                <button type="submit" class="bbtn" @click="counterTroco"></button>    
                
                <button type="submit" class="btn btn-success" id="bootshit" @click.stop.prevent="finalizar">
                    Finalizar
                </button>
            </div>

    
        </div>
    </div>

</template>



<script>
import Cupom from './Cupom/Cupom'
import Navbar from '../Navbar'
import { create } from '../mixins/create.js'
import axios from 'axios';
import { url } from '../mixins/url.js'

export default {
    components: { Cupom , Navbar },
    mixins: [url],

    data(){
        return{
            valorTotal: null,
            valorRecebido: null,
            valorTroco: null,
            cpf: null,
            count: null, 
            countPrice: null
        }
    },

    methods:{
        finalizar(){
        this.route = '/venda';
        
        console.log(this.url + this.route)

        let datas = JSON.stringify({
            valorTotal: this.valorTotal,
            valorRecebido: this.valorRecebido,
            valorTroco: this.valorTroco,
            cpf: this.cpf
        })

        console.log('datas da venda '+datas)

           axios
            .post(this.url + this.route, datas, {
                headers: { 'Content-Type': 'application/json'},
            })
            .then( (response) => {
                console.log(response)
                alert('Venda Finalizada')
                window.location.reload();
            })
            .catch(error => console.log(error))
              
          },

      counterTroco(){
            if(this.valorTotal > this.valorRecebido){
                alert('Dinheiro insuficiente')
                return;
            }
           
            let troco = (this.valorRecebido - this.valorTotal)
            troco = troco.toFixed(2)
            this.valorTroco = troco
          
      }
    },

    created(){
        
        this.$bus.$on('removendo', valorProduto =>{
            console.log('entrei no removendo')
            this.count = this.count - 1
            console.log(this.count)
            this.countPrice = this.countPrice - valorProduto
            console.log(this.countPrice)
            
            this.$bus.$emit('increment', -1)

            this.$bus.$emit('countPrice' -valorProduto)
      })
        
    
    this.$bus.$on('increment', count => {
        this.count = count
        console.log('this.count' + this.count)
    }),

    this.$bus.$on('countPrice', countPrice => {
        this.countPrice = countPrice
        this.valorTotal = this.countPrice
        console.log('this.countPrice ' + this.countPrice)
    })
    }
}
</script>


<style>
.paizao
{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1%;
}

.direita
{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
}

.esquerda
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.itens
{
    width: 47%;
}

.recebido
{
    width: 47%;
}

#bootshit
{
    height: 2.8em;
    margin: 1.6em -2em;
}
</style>
