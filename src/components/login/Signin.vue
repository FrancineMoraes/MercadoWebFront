<template>
        <div class="login">
	          <h1>Login</h1>
              <form action="">
    	        <input type="text" name="usernamein" placeholder="Usuário" 
              required="required" v-model="username"/>

              <input type="password" name="passwordin" placeholder="Senha" 
              required="required" v-model="password"/>

              <button type="submit" class="btn btn-primary btn-block btn-large">Enviar</button>
            </form>
				<br>
        </div>    
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {

  /*  submit () {
      
      this.$emit('do-sign-in', {...this.$data})
      //window.console.log(JSON.stringify(this.$data))
    }
*/
  }
}
</script>