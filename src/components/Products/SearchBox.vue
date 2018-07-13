<template>
    <div>
            <div style="margin: -60px 0px 0px 0px;">
               <Navbar/>
            </div>

            <div class="col-sm-12"><br><br></div>

            <b-nav-form style="margin-left: 130px;">
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
                    <tr v-for="prod in produtos" v-bind:key="prod.id">
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
import Navbar from '../Navbar'
import axios from 'axios'

export default {
    components: {Navbar},   
    
    mixins: [ url ],

    data(){
        return{
            search: '',
            produtos:{},
        }
    },

    methods: {
        Search: function (){
            var montada = this.url + "admin/produto/nome/like/" +this.search;
            
            axios
            .get(montada)
            .then(response => {
                this.produtos = response.data;
                for(let i = 0; i<this.produtos.lenght; i++){
                    this.produtos = this.produtos[i];
                }
                }).catch(error => {
                    console.log(error)
            })
        }
    }, 

    
}
</script>

