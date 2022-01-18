<template>
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul class="lista">
            <Router-link tag="li" to="/usuarios/1/" class="item-lista">
                Usuário 1
            </Router-link>
            <Router-link tag="li" to="/usuarios/2/" class="item-lista">
                Usuário 2
            </Router-link>
            <Router-link tag="li" to="/usuarios/3/" class="item-lista">
                Usuário 3
            </Router-link>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
