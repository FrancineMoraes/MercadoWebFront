<template>
    <div>
        
        
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="text" v-model="search"
                placeholder="Search"/>
                <b-button  v-on:click="Search()" size="sm" class="my-2 my-sm-0"
                style="height: 33px;">Search</b-button>
            </b-nav-form>
        

        <div class="col-sm-10" style="margin: auto;">
            <br><br>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"> Nome </th>
                        <th scope="col"> Quantidade </th>
                        <th scope="col"> Código de Barras </th>
                        <th scope="col"> Preço </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prod in produtos" v-bind:key="prod.produto_id">
                        <td scope="row">{{prod.nome}}</td>
                        <td scope="row">{{prod.estoque}}</td>
                        <td scope="row">{{prod.codigoDeBarra}}</td>
                        <td scope="row">{{prod.valorUn}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { url } from '../mixins/url.js'
import axios from 'axios'

export default {
    mixins: [ url ],

    data(){
        return{
            search: '',
            produtos:{},
        }
    },

    methods: {
        Search: function (){
            var montada = this.url + "/produto/nome/" +this.search;
            
            axios
            .get(montada)
            .then(response => {
                var object = JSON.stringify(response.data)
                this.produtos = object

                console.log(this.produtos + "printzaooooo") 
                console.log(error)
                }).catch(error => {
            })
        }
    }, 

    
}
</script>

