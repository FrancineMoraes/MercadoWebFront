<template>
  <div>
  <div style="margin: -60px 0px 0px 0px;">
    <Navbar/>
  </div>

  <div class="col-sm-12"><br><br></div>

    <table>
       <tr>
           <th>Usuário</th>
           <th>Senha</th>
           <th> 
              <Create />
              <Delete /> 
              <Edit />
            </th>
       </tr>
       <tr v-for="log in usuario" :key="log.id">
           <td>{{log.nome}}</td>
           <td>{{log.senha}}</td>
           <th>
              <input type="radio" name="log" @change="select(log)">
           </th>
       </tr>
   </table>
  </div>
</template>

<script>
import Navbar from '../Navbar'
import { url } from '../mixins/url.js'
import { init } from '../mixins/init.js'
import Create from './Create'
import Delete from './Delete'
import Edit from './Edit'

export default {

  components: {Navbar, Create, Delete, Edit},
  
  mixins: [ url, init ],
  data() {
    return {
      usuario: null,
    }
  },
  
  methods:{
    el(){
      this.route = '/usuario';
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