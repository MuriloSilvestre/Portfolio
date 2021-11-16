import Vue from 'vue';

export default new Vue({
    methods:{
        setUsuarioSelecionado(usuario){
            this.$emit('setUsuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback){
            this.$on('setUsuarioSelecionado', callback)
        }
    }
}
)
