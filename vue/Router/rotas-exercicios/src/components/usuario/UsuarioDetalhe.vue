<template>
    <div class="usuario-detalhe">
        <h3>Usuários Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- :to="`/usuarios/${id}/editar`" -->
        <router-link tag="Button" primario 
        :to="{
            name: 'editarUsuarios', 
            params: { id }, 
            query: { completo: true, lingua: 'pt'}, 
            hash: '#rodape'}">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter: ((to, from, next)=>{
    console.log('antes das rotas -> beforeRouteEnter')
    const autentificado = true
    autentificado ? next() : next(false)
})
}
</script>

<style>

</style>
