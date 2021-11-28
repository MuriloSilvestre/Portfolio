<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto">{{ mensagem.texto }}</b-alert>
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
				<b-button @click="carregar(id)"
					size="lg" variant="warning">Carregar</b-button>
				<b-button @click="excluir(id)"
					size="lg" class="ml-2" variant="danger">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data:()=>{
		return{
			mensagens: [],
			usuarios: [],
			id: null,
			usuario:{
				name:'',
				age:0,
				email:'',
			}
		}
	},
	methods:{
		limpar(){
			this.usuario.name = ''
			this.usuario.age = 0
			this.usuario.email =''
			this.id = null
			this.mensagens = []
		},

		carregar(id){
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},

		salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalURL = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalURL}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizado com sucesso!',
						tipo: 'success'
					})
				})
		},

		obterUsuarios(){
			this.$http.get('usuarios.json').then(res=>{
				this.usuarios = res.data
			})
		},

		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then(() => {
				this.limpar()
				this.obterUsuarios()
			})
			.catch(()=>{
				this.mensagens.push({
					texto: 'Problema para excluir!',
					tipo: 'danger'
				})
			})
		},
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
