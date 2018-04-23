<template>
  <div id="formup" class="create">
    <h1>Cadastro de Produtos</h1>
      <form class="createform">
    	        <input type="text" id="desc" name="" placeholder="Descrição do produto" required="required" /><br>
                <input type="password" id="qtd" name="" placeholder="Quantidade" required="required" /><br>
                <input type="text" id="valor" name="" placeholder="Valor unitário"/> <br>
                <button type="submit" class="btn btn-primary btn-block btn-large">Enviar</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'CreateProducts'
}
</script>

<style scoped>
  #formup{
    margin: 0 auto 0 auto;
  }

  input{
    width: 40%;
  }

  button{
    width: 15%;
    margin: 0 auto;
  }
</style>