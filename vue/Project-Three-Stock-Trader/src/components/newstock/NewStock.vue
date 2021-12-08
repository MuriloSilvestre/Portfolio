<template>
	<v-flex class="pr-3 pd-3" xs12 md12 lg12>
		<v-card class="green darken-3 white--text">
			<v-card-title>
				<strong>Nova Ação</strong>
			</v-card-title>
		</v-card>
		<v-card>
			<v-container fill-height>
				<v-text-field class="pr-3" label="Nome" type="text" v-model="name" />
				<v-text-field class="pr-3" label="Quantidade" type="number" v-model="quantity"  />
				<v-text-field class="pr-3" label="Preço" type="number" v-model="price"  />
				<v-btn @click="salvar" class="green darken-3 white--text">Salvar</v-btn>
			</v-container>
		</v-card>
	</v-flex>
</template>

<script>
export default {
	data:()=>{
		return{
			strock:{
				id: 0,
				name: '',
				quantity: 0,
				price: 0
			}
		}
	},
	methods:{
		salvar(){
			const finalURL =  '.json'
			this.$http.post(`/stocks${finalURL}`, this.strock)
			.then(() => {
				this.name = ''
				this.quantity = 0
				this.price = 0
			})
		},
	}
}
</script>

<style>

</style>

