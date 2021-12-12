<template>
	<v-flex class="pr-3 pd-3" xs12 md6 lg4>
		<v-card class="green darken-3 white--text">
			<v-card-title>
				<strong>{{ stock.name }}<small>(Preço: {{ stock.price | currency }})</small></strong>
			</v-card-title>
		</v-card>
		<v-card>
			<v-container fill-height>
				<v-text-field label="Quantidade" type="number" 
					:error="insufficientFunds || quantity < 0 || !Number.isInteger(quantity)"
					v-model.number="quantity" />
				<v-btn class="green darken-3 white--text"
					:disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
					@click="buyStock">{{ insufficientFunds ? 'Insuficiente' : 'Comprar'}}</v-btn>
			</v-container>
		</v-card>
	</v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props: ['stock'],
	data:()=>{
		return {
			quantity: 0
		}
	},
	methods:{
		...mapActions({ buyStockAction: 'buyStock'}),
		buyStock(){
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.buyStockAction(order)
			//this.$store.dispatch('sellStock', order)
			this.quantity = 0
		}
	},
	computed: {
		funds(){
			return this.$store.getters.funds
		},
		insufficientFunds(){
			return this.quantity * this.stock.price > this.funds
		}
	}
}
</script>

<style>

</style>

