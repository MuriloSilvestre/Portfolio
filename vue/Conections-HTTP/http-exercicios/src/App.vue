<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-for-group label="Name:">
				<b-form-input type="text" size="lg"
				v-model="usuario.name" placeholder="Informe o nome"></b-form-input>
			</b-for-group>
			<b-for-group label="Age:">
				<b-form-input type="number" size="lg"
				v-model="usuario.age" placeholder="Informe a idade"></b-form-input>
			</b-for-group>
			<b-for-group label="E-Mail:">
				<b-form-input type="text" size="lg"
				v-model="usuario.email" placeholder="Informe o e-mail"></b-form-input>
			</b-for-group>
		</b-card>
	</div>
</template>

<script>
export default {
	data:()=>{
		return{
			usuario:{
				name:'',
				age:0,
				email:'',
			}
		}
	}
	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		name: 'Murilo Silvestre',
	// 		age: 26,
	// 		email: 'm.serratosilvestre@gmail.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
