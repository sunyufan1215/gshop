
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  DELETE_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqShopRatings,
  reqShopInfo,
  reqShopGoods,
  reqLogout,
  reqSearchShop
} from '../api'

export default {

  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys({commit}) {
    const result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys  = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops({commit, state}) {
    const result = await reqShops(state.longitude, state.latitude)
    const shops = result.data
    commit(RECEIVE_SHOPS, {shops})
  },

  recordUserInfo({commit}, userInfo){
    commit(RECEIVE_USERINFO, {userInfo})
  },

  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },

  async lgoutUser({commit}) {
    const result = await reqLogout()
    if(result.code === 0){
      commit(DELETE_USERINFO)
    }
  },

  async getShopGoods({commit}, callback){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback()
    }
  },

  async getShopInfo({commit}){
    const result = await reqShopInfo()
    // console.log(888888888)
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  async getShopRatings({commit}, callback){
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },

  updateFoodCount({commit}, {isAdd, food}){
    if(isAdd){
      commit(INCREASE_FOOD_COUNT, {food})
    }else {
      commit(DECREASE_FOOD_COUNT, {food})
    }
  },

  clearCart({commit}){
    commit(CLEAR_CART)
  },

  async searchShops({commit, state}, keyword){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if(result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
}
