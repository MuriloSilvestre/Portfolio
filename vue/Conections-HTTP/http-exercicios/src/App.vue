<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Name:">
				<b-form-input type="text" size="lg"
				v-model="usuario.name" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Age:">
				<b-form-input type="number" size="lg"
				v-model="usuario.age" placeholder="Informe a idade"></b-form-input>
			</b-form-group>
			<b-form-group label="E-Mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email" placeholder="Informe o e-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios"
				size="lg" class="ml-2" variant="success">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong> Nome: </strong> {{usuario.name}}<br>
				<strong> Idade: </strong> {{usuario.age}}<br>
				<strong> E-mail: </strong> {{usuario.email}}<br>
				<strong> Id: </strong> {{ id }}<br>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data:()=>{
		return{
			usuarios:[],
			usuario:{
				name:'',
				age:0,
				email:'',
			}
		}
	},
	methods:{
		salvar(){
			this.$http.post('usuarios.json', this.usuario)
				.then(res =>{
					this.usuario.name = ''
					this.usuario.age = 0
					this.usuario.email =''
				})
		},
		obterUsuarios(){
			this.$http.get('usuarios.json').then(res=>{
				this.usuarios = res.data
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
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
