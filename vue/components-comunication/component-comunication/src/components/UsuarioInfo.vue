<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverteNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (CallBack)</button>
    </div>
</template>

<script>
export default {
    props:{
        nome: {
            type: String,
            // required: true,
            // default: ()=>{
            //     return Array(10).fill(0).join(',')
            // },
            default: 'Anônimo'
        },
        reiniciarFn: Function
    },
    methods: {
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = "Murilo"
            this.$emit('reiniciarNome', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
