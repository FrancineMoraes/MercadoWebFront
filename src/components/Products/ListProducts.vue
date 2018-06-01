<template>
  <div>
    <table>
       <tr>
           <th>Nome</th>
           <th>Código de Barras</th>
           <th>Quantidade em estoque</th>
           <th>Valor unitário</th>
           <th> 
              <Create />
              <Delete /> 
              <Edit />
            </th>  
       </tr>
       <tr v-for="prod in produto" :key="prod.produto_id">
           <td>{{prod.nome}}</td>
           <td>{{prod.codigoDeBarra}}</td>
           <td>{{prod.estoque}}</td>
           <td>{{prod.valorUn}}</td>
           <th>
              <input type="radio" name="prod" @change="select(prod)">
           </th>
       </tr>
   </table>
    

  </div>
</template>

<script>
import { url } from '../mixins/url.js'
import { init } from '../mixins/init.js'
import Create from './Create'
import Delete from './Delete'
import Edit from './Edit'

export default {

  components: { Create, Delete, Edit},
  
  mixins: [ url, init ],

  data() {
    return {
      produto: null,
    }
  },
  
  methods:{
    el(){
      this.route = '/produto';
    }
  },

  
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