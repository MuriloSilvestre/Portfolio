export default{
    state:{
        funds: 10000,
        stocks:[]
    },
    mutations:{
        buyStock(state, { stockId, quantity, stockPrice } ){
            const records = state.stock.find(element => element.id == stockId)
            if (records){
                records.quantity += quantity 
            } else {
                state.stock.push({
                    id:stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }){
            const records = state.stock.find(element => element.id == stockId)
            if ( records.quantity > quantity ){
                records.quantity -= quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(records), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    actions:{
        sellStock({ commit }, order){
            commit('sellStock', order)
        }
    },
    getters:{
        stockProtfolio(state, getters){
            return state.stocks.map(stock=>{
                const records = getters.stock.find(element => element.id == stock.id)
                return{
                    id: stock.id,
                    name: records.name,
                    quantity: stock.quantity,
                    price: records.price
                }
            })
        },
        fund(state){
            return this.state.funds
        }
    }
}
