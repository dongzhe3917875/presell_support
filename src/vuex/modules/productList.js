import { ADD_TO_CART, DETELE_CART, MAKE_ORDER } from '../mutation-types'
import deepClone from '../../util/deepClone'
const state = {
	product_list: [],
	total: 0,
	id: 0
}
const mutations = {
	[MAKE_ORDER] (state, ids) {
		state.product_list = state.product_list.filter(item => !ids.includes(item.id))
	},
	[ADD_TO_CART] (state, info) {
		var infoObj = {}
		let properties = deepClone(info.sendData)
		let num = info.num.currentNum
		let cost = info.cost
		let id = ++state.id
		infoObj = { properties, num, cost, id }
		state.product_list.push(infoObj)
	},
	[DETELE_CART] (state, id) {
		state.product_list = state.product_list.filter(ele => ele.id !== id)
	}
	// [GET_TOTAL] (state) {
	// 	state.total = state.product_list.reduce(generate(add), 0)
	// }
}

export default {
	state,
	mutations
}
