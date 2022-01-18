import { createApp } from 'vue'
import App from './App.vue'
import counters from './counters.vue'

createApp(App).component('app-counters', counters).mount('#app')
