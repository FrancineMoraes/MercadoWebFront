<template>
    <div>
            <div style="margin: -60px 0px 0px 0px;">
                <Navbar/>
            </div>

            <div class="col-sm-12"><br><br></div>

            <b-nav-form style="margin-left: 130px;" id="search">
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
                        <th scope="col"> Usuário </th>
                        <th scope="col"> Senha </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="log in usuario" v-bind:key="log.id">
                        <td scope="row">{{log.nome}}</td>
                        <td scope="row">{{log.senha}}</td>
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
            usuario:{}
        }
    },

    methods: {
        Search: function (){
            let montada = this.url + "admin/usuario/busca/" + this.search;
            
            axios
            .get(montada)
            .then(response => {
                this.usuario = response.data;
                console.log(response.data)
                for(let i = 0; i<this.usuario.lenght; i++){
                    this.usuario = this.usuario[i];
                }
                }).catch(error => {
                    console.log(error)
            })
        }
    }, 

    
}
</script>



