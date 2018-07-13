<template>
<div id="cssmenu">
    <b-navbar toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Mercado Web</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>

      <b-nav-item href="/venda">Venda</b-nav-item>

      <b-nav-item-dropdown>

        <template slot="button-content">
          Produto
        </template>
        <b-dropdown-item href="/produtos">Lista de Produtos</b-dropdown-item>
        <b-dropdown-item href="/produtos/busca">Busca de Produtos</b-dropdown-item>
        <b-dropdown-item href="http://localhost:8083/admin/produto/PDF">Relatório de Produtos</b-dropdown-item>
      
      </b-nav-item-dropdown>

      <b-nav-item-dropdown>
        
        <template slot="button-content">
          Usuários
        </template>
        <b-dropdown-item href="/usuarios">Lista de Usuários</b-dropdown-item>
        <b-dropdown-item href="/usuarios/busca">Busca de Usuários</b-dropdown-item>
      
      </b-nav-item-dropdown>

    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          {{usuario}}
        </template>
        <b-dropdown-item @click.stop.prevent="sair" href="#">Sair</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',

    data(){
      return{
        usuario: localStorage.getItem('nome')
      }
    },

    methods:{
      sair(){
        localStorage.clear();
        this.$router.push('/login')
      }
    }
}
</script>

<style scoped>
  #cssmenu{
    margin: -62px -0 -62 -0px;
  }
</style>
