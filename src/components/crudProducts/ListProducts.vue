<template>
  <table>
      <tr>
          <th>Nome</th>
          <th>Código de Barras</th>
          <th>Quantidade em estoque</th>
          <th>Valor unitário</th>
          <th>Ações</th>
      </tr>
      <tr v-for="prod in produtos" :key="prod.nome">
          <td>{{prod.nome}}</td>
          <td>{{prod.codigoDeBarra}}</td>
          <td>{{prod.estoque}}</td>
          <td>{{prod.valorUn}}</td>
          <th>
              <input type="button" value="Alterar" class="btn btn-primary btn-block btn-large" 
              style="width: 40%; height: 50%; display: inline-block;">

              <input type="button" value="Excluir" class="btn btn-primary btn-block btn-large"  
              style="width: 40%; height: 50%; display: inline-block;" v-on:click="deletar(prod)">
          </th>
      </tr>
  </table>
</template>

<script>

//const url = "https://mercado-web.herokuapp.com/produto"
const url = "http://localhost:8080/produto"

export default {
  
  
  data(){
      return{
          produtos:[]
      }
  },



  created: function() {
      this.$http.get(url).then(function(response){
          this.produtos = response.body;
      }, function(response){
          console.log("Nao funcionou")
      })
  },



  methods: {
      
      
      deletar: function (produtoExcluir){
        this.$http.delete("http://localhost:8080/produto/"+ produtoExcluir.produto_id).then(function(response){
          var indice = this.produtos.indexOf(produtoExcluir);

          this.produtos.splice(indice, 1);
        })
      },

/*      update: function(produtoExcluir){
        this.$http.put("http://localhost:8080/produto/"+ produtoExcluir.produto_id).then(function(response){
          var indice = this.produtos.indexOf(produtoExcluir);

          this.produtos.splice(indice, 1);
        })
      }
      */
  }
}
</script>


<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0 auto 0 auto;
  padding: 0;
  width: 70%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>