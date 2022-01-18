import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stocktrader-32a5e-default-rtdb.firebaseio.com/'
        })
    }
})