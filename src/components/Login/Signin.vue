<template>
        <div class="login">
	          <h1>Login</h1>
              <form action="">
    	        <input type="text" name="username" placeholder="Usuário" 
              required="required" v-model="username"/>

              <input type="password" name="password" placeholder="Senha" 
              required="required" v-model="password"/>

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
      username: null,
      password: null
    }
  },

  methods: {
      logar() {
        console.log('oi entrei no logar')

        this.route = '/oauth/token'

        axios
            .post(this.url + this.route, {
              username:       this.username,
              password:       this.password,
              grant_type:     'password',
              client:         1
            }, {
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                },
            })
            .then( (response) => {
                console.log('sucess do login la vem o response')
                console.log(response)
            })
            .catch(error => console.log('dei errinho hahahaa '+error))
              
          }

    }
  }

</script>

