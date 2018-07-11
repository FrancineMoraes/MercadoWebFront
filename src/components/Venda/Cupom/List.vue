<template>
<div class="container">
    <div class="table">
        <table>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor unitário</th>  
                <th>Actions
                    <Delete/>
                </th>
            </tr>
            <tr v-for="itens in cupom" :key="itens.cupomId.cupom_id">
                <td>{{itens.produto.nome}}</td>
                <td>{{itens.quantVendida}}</td>
                <td>{{itens.valorProduto}}</td>
                <th class="tuamae2">
                    <input type="radio" name="itens" class="tuamae" @change="select2(itens)">
                </th>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import { url } from '../../mixins/url.js'
import { init } from '../../mixins/init.js'
import Delete from './Delete'

export default {
    mixins: [ url, init ],

    components: { Delete },

    data(){
        return{
            cupom:{}      
        }
    },

    methods:{
        el(){
            this.route = 'admin/cupom';
        }
    }
}
</script>

<style>
.actions{
    float: left;
    display: flex;
    flex-direction: row;
    align-content: space-around;
}

.tuamae{
    box-sizing: content-box;
    width: 1rem;
    border-radius: 50px;
}

</style>
