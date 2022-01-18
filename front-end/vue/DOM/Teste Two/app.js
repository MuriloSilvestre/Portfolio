
new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertClick(){
            alert("Button clicked")
        },
        onEnter(event){
            this.valor =  event.target.value
        }
    }
})