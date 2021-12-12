<template>
	<div>
		<h1 class="display-3 font-weight-light mb-4">
			Negocie e consulte suas Ações
		</h1>
		<v-sheet :elevation="6" class="pa-2" color="primary">
			<v-icon class="white--text mr-3">info</v-icon>
			<span class="white--text font-weight-light headline">Você pode Salvar & Carregar os Dados</span>
		</v-sheet>
		<v-sheet :elevation="6" class="pa-2 mt-3" color="success darken-1">
			<v-icon class="white--text mr-3">info</v-icon>
			<span class="white--text font-weight-light headline">Click em 'Finalizar Dia' para íniciar um novo dia!</span>
		</v-sheet>
		<v-divider class="my-4"/>
		<p class="display-1"><strong>Seu Saldo:</strong> {{ funds | currency }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		funds(){
			return this.$store.getters.funds
		}
	}
}
</script>

<style>

</style>

