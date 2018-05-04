<template>
  <table>
      <tr>
          <th>Usuário</th>
          <th>Senha</th>
      </tr>
      <tr v-for="usu in usuarios" :key="usu.nome">
          <td>{{usu.usuario}}</td>
          <td>{{usu.senha}}</td>
      </tr>
  </table>
</template>

<script>
export default {
  data(){
      return{
          usuarios:[]
      }
  },

  created: function() {
      this.$http.get("http://localhost:8080/login").then(function(response){
          this.usuarios = response.body;
      }, function(response){
          console.log("Nao funcionou")
      })
  }
}
</script>
<style scoped>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}

td, th {
    border: 3px solid #dddddd;
    text-align: left;
    padding: 15px;
}
</style>