<template>
	<div class="formlogin">
		<Signin @do-sign-in="doSignIn"/>
	</div>
</template>

<script>

import Signin from './Login/Signin'
export default {
	 
	name: 'Main',
	
	components: {
		Signin
	}
}
</script>