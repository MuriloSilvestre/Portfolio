new Vue({
    el: '#desafio',
    data: {
        counter: 0
    },
    computed:{
        result(){
            return this.counter !== 37 ? "Valor Diferente" : "Valor Igual"
        }
    },
    watch:{
        counter( New , Old ){
            setTimeout(()=>{
                this.counter = 0
            }, 5000)
        }
    },
})