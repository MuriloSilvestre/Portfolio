import Vue from 'vue'
import Vuex from 'vuex'

import Stocks from './modules/stocks'
import Portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Stocks,
        Portfolio
    }
})
