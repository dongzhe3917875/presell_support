import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
import simpleProduct from './modules/simpleProduct'
import productList from './modules/productList'
import makeOrder from './modules/makeOrder'
import address from './modules/address'
Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
	modules: {
		productList,
		simpleProduct,
		makeOrder,
		address
	},
	strict: debug
})
