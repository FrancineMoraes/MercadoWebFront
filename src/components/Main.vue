<template>
	<div class="formlogin">
		<Signin @do-sign-in="doSignIn"/>
	</div>
</template>

<script>

import Signin from './login/Signin'
export default {
	 
	name: 'Main',
	
	components: {
		Signin
	},

	//methods: {
	//	doSignIn (obj) {

	//	}
	//}
	
}
</script>