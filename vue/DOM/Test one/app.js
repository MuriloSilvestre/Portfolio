
new Vue({
    el: '#desafio',
    data: {
        NOME: 'SEU_NOME',
        IDADE: 26,
        link:'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg',
    },
    methods: {
        ChangeName(event){
            this.NOME = event.target.value
        }
    }
})