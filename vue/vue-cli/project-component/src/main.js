import { createApp } from 'vue'
import App from './App.vue'
import counter from './counter.vue'

createApp(App).component('app-counter', counter).mount('#app')
