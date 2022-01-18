<template>
    <div clas="counters">
        <app-counter v-for="c in 5" :key="c" />
    </div>
</template>

<script>
import counter from './counter.vue'
export default {
  components: { 'app-counte': counter },

}
</script>

<style>

</style>