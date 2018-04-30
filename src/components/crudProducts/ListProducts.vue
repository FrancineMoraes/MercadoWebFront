<template>
  <div>
      <table>
          <tr>
              <th>Codigo de Barra</th>
              <th>Descrição do Produto</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
          </tr>
          <tr v-for="prod in produtos" :key="prod.nome">
              <td>{{prod.codigoDeBarra}}</td>
              <td>{{prod.nome}}</td>
              <td>{{prod.estoque}}</td>
              <td>{{prod.valorUn}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  data(){
      return{
          produtos:[]
      }
  },

      created:function (){
          this.$http.get("http://localhost:8080/produto").then(function (response){
              this.produtos=response.body;
          }, function(response){
              console.log("nao funcionou")
          });
      }
  }

</script>
 <style>
    table{
        width: 50%;
        margin-right:auto; 
        margin-left:auto;
    }
 </style>
 

