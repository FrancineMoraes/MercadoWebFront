<template>
  <div class="formup">
    <h1>Cadastro de Usuários</h1>
      <form class="createform" v-on:submit.prevent="insert">
    	        <input  type="text" v-model="usuario.usuario" 
              placeholder="Usuário" required="required" />
              <br>

              <input type="password" v-model="usuario.senha" 
              placeholder="Senha" required="required" />
              <br>

              <button type="submit" class="btn btn-primary btn-block btn-large"
              >Enviar</button>
      </form>
  </div>
</template>

<script>
const url = "http://localhost:8080/login"
export default {

  data(){
      return{
        usuario:{
            senha: '',
            usuario: ''
      }
      }
    },


  methods: {

      insert(){
          console.log(this.usuario)
          
          this.$http.post(url, this.usuario).then(function(response){
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