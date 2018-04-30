<template>
  <table>
      <tr>
          <th>Nome</th>
          <th>Código de Barras</th>
          <th>Quantidade em estoque</th>
          <th>Valor unitário</th>
      </tr>
      <tr v-for="prod in produtos" :key="prod.nome">
          <td>{{prod.nome}}</td>
          <td>{{prod.codigoDeBarra}}</td>
          <td>{{prod.estoque}}</td>
          <td>{{prod.valorUn}}</td>
      </tr>
  </table>
</template>




<script>
export default {
  data(){
      return{
          produtos:[]
      }
  },

  created: function() {
      this.$http.get("http://localhost:8080/produto").then(function(response){
          this.produtos = response.body;
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
    border: 4px solid #dddddd;
    text-align: left;
    padding: 15px;
}


</style>