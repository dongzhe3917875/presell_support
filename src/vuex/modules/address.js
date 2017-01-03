import { CHANGE_DEFAULT, GET_ADDRESS, CHOOSE_ADDRESS } from '../mutation-types'
const state = {
	addressList: [],
	defaultAddress: {},
	chooseAddress: null
}
const mutations = {
	[CHANGE_DEFAULT] (state) {
		console.log('ll')
	},
	[GET_ADDRESS] (state, address) {
		state.addressList = address.res
		state.defaultAddress = state.addressList.find(item => item.default === 1)
	},
	[CHOOSE_ADDRESS] (state, chooseAddr) {
		state.chooseAddress = state.addressList.find(item => item.address_id === chooseAddr.address_id)
	}
}
export default {
	state,
	mutations
}
