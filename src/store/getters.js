export default {
  totalPrice(state){
    return state.cartFoods.reduce((prev, cur) => prev + cur.count*cur.price, 0)
  },
  totalCount(state){
    return state.cartFoods.reduce((prev, cur) => prev + cur.count, 0)
  },
  positiveSize(state){
    return state.ratings.reduce((prev, cur) => prev + (cur.rateType===0 ? 1 : 0), 0)
  }
}
