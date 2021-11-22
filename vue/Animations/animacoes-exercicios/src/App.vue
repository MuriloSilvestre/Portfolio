<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar mensagem</b-button>
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>
		<hr>
		<b-select v-model="animationType" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="animationType" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>
		<hr>
		<b-button variant="primary" @click="exibirJs = !exibirJs">
			Alternar
		</b-button>
		<transition 
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibirJs">

			</div>
		</transition>
	</div>
</template>

<script>

export default {
	data:() => {
		return{
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibirJs: true,
			animationType: 'fade',
			baseWidth: 0
		}
	},
	methods:{
		beforeEnter(el){
			console.log('beforeEnter')
		},
		enter(el, done){
			let rodada = 1
			const temporizador = setInterval(()=>{
				const novaLargura = this.baseWidth + rodada*10
				el.style.width = `${novaLargura}px`
				rodada ++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 8)
		},
		afterEnter(el){
			console.log('afterEnter')
		},
		enterCancelled(){
			console.log('enterCancelled')
		},
		beforeLeave(el){
			console.log('beforeLeave')
		},
		leave(el, done){
			console.log('leave')
			done()
		},
		afterLeave(el){
			console.log('afterLeave')
		},
		leaveCancelled(){
			console.log('leaveCancelled')
		},
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active{
	transition: opacity 2s;	
}

@keyframes slide-in {
	from{ transform: translateY(20px); }
	to { transform: translateY(0px); }
}

@keyframes slide-out {
	from{ transform: translateY(0px); }
	to { transform: translateY(20px); }
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;	
}

.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 2s;	
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}




</style>
