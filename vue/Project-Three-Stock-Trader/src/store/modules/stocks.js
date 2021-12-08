import stocks from '../../data/stocks'

export default{
    state:{
        stocks: [],
        strock:{
            id: stocks.id++,
            name: '',
            price: 0,
            quantity: 0
        }
    },
    mutations:{
        setStocks(state, stocks){
            state.stocks = stocks
        }
    },
    actions:{
        buyStock({ commit }, order){
            commit(order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}
