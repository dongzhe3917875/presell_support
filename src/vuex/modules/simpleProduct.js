import { SIMPLE_PRODUCT, CHANGE_CLASS, CHANGE_SENDATA, GET_NUMBER_INFO, CHANGE_NUMBER, GET_PRICE, ADD_TO_CART, DETELE_CART } from '../mutation-types'

const state = {
	items: [],
	sendData: {
		color: '',
		size: '',
		quality: ''
	},
	num: {},
	cost: ''
}

const mutations = {
	[SIMPLE_PRODUCT] (state, simpleProduct) {
		state.items = simpleProduct.res.properties
		state.cost = simpleProduct.res.price
		mutations[[CHANGE_SENDATA]](state)
	},
	[CHANGE_CLASS] (state, index, itemindex) {
		state.items[itemindex].current = index
	},
	[CHANGE_SENDATA] (state) {
		Object.keys(state.sendData).forEach(item => {
			let match = state.items.find(p => p.name === item)
			state.sendData[item] = match.type[match.current]
		})
	},
	[GET_PRICE] (state, cost) {
		state.cost = cost.res.price
	},
	[GET_NUMBER_INFO] (state, numberInfo) {
		state.num = numberInfo
	},
	[CHANGE_NUMBER] (state, number) {
		state.num.currentNum = number
	},
	[ADD_TO_CART] (state) {
	},
	[DETELE_CART] (state) {
	}
}

export default {
	state,
	mutations
}
