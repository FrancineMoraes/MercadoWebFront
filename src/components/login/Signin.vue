<template>
        <div class="login">
	          <h1>Login</h1>
            <form action="#" @submit.prevent="submit">
    	        <input type="text" name="usernamein" placeholder="Usuário" required="required" v-model="username"/>
              <input type="password" name="passwordin" placeholder="Senha" required="required" v-model="password"/>
              <button type="submit" class="btn btn-primary btn-block btn-large">Enviar</button>
            </form>
				<br>
        <router-link :to="{ name: 'Signup' }">Registre-se</router-link>
        <router-view/>
        </div>    
</template>

<script>
import Signup from './Signup'

export default {
  components: {
		Signup
	},

  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {

    submit () {
      
      this.$emit('do-sign-in', {...this.$data})
      //window.console.log(JSON.stringify(this.$data))
    }

  }
}
</script>