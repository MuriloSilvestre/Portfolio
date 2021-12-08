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
    action:{
        buyStock({ commit }, order){
            commit()
        },
        initStocks({ commit }){
            commit('setStock', stocks)
        }
    },
    getters:{
        stocks(state){
            return state.stocks
        }
    }
}
