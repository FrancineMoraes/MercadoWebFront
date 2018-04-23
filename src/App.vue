<template>
  <div id="app">
    <!--<button @click.stop.prevent="getUsers()">GET USERS</button>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  //testes getUsuarios
  
  name: 'App', 
    methods: {
      getUsers(){
        var url = 'http://localhost:8080/login/lista';
        this.$http.get(url).then(function(r){
          console.log(r.body);
        })
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
