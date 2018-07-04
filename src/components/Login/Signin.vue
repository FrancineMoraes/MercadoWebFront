<template>
        <div class="login">
	          <h1>Login</h1>
              <form action="">
    	        <input type="text" name="nome" placeholder="Usuário" 
              required="required" v-model="nome"/>

              <input type="password" name="senha" placeholder="Senha" 
              required="required" v-model="senha"/>

              <button type="submit" class="btn btn-dark btn-block btn-large"
              @click.prevent="logar">Enviar</button>
            </form>
				<br>
        </div>    
</template>

<script>
import {url} from '../mixins/url.js'
import axios from 'axios'

export default {

  mixins: [url],

  data () {
    return {
      nome: null,
      senha: null
    }
  },

  methods: {
      logar() {
        this.route = '/login'

        axios
            .post(this.url + this.route, 
            {
              nome: this.nome,
              senha: this.senha
            },
            
          )
            .then( (response) => {
                console.log(response.data)
                let role = response.data.role
                let token = response.data.token
                let nome = response.data.nome

                localStorage.setItem('nome', nome)
                localStorage.setItem('role', role)
                localStorage.setItem('token', token)

                this.$router.push('/produtos')
            })
            .catch(error => console.log(error))
              
          }

    }
  }

</script>

