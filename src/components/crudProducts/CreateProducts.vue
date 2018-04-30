<template>
  <div class="formup">
    <h1>Cadastro de Produtos</h1>
      <form class="createform" v-on:submit.prevent="insert">
    	        <input  type="text" v-model="produto.codigoDeBarra" 
              placeholder="Código de Barra" required="required" />
              <br>

              <input type="text" v-model="produto.estoque" 
              placeholder="Quantidade" required="required" />
              <br>

              <input type="text" v-model="produto.nome" 
              placeholder="Descrição do produto" required="required" />
              <br>
              
              <input type="text" v-model="produto.valorUn" 
              placeholder="Valor unitário"/> 
              <br>

              <button type="submit" class="btn btn-primary btn-block btn-large"
              >Enviar</button>
      </form>
  </div>
</template>

<script>
//const url = 'https://5ae67b7736a18b00144e39a8.mockapi.io/produtos'
const url = "http://localhost:8080"
export default {

  data(){
      return{
        produto:{
            codigoDeBarra: '',
            estoque: '',
            nome: '',
            valorUn: ''
      }
      }
    },


  name: 'CreateProducts',


  methods: {

      insert(){
          console.log(this.produto)
          
          this.$http.post(url, this.produto).then(function(response){
          console.log(response, " funcionou");
      }, function(error){
          console.log(error, " nao funcionou")
      });
      }
  }
  }


</script>

<style scoped>
  .formup{
    margin: 13% auto 0 auto;
  }

  input{
    width: 40%;
  }

  button{
    width: 15%;
    margin: 0 auto;
  }
</style>