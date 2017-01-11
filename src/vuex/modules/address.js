import { CHANGE_DEFAULT, GET_ADDRESS, CHOOSE_ADDRESS, DELETE_ADDRESS } from '../mutation-types'
const state = {
	addressList: [],
	defaultAddress: null,
	chooseAddress: null
}
const mutations = {
	[CHANGE_DEFAULT] (state) {
		console.log('ll')
	},
	[GET_ADDRESS] (state, address) {
		address.res.default && address.res.other.unshift(address.res.default)
		state.addressList = address.res.other
		state.defaultAddress = address.res.default
	},
	[CHOOSE_ADDRESS] (state, chooseAddr) {
		state.chooseAddress = state.addressList.find(item => item.id === chooseAddr.id)
	},
	[DELETE_ADDRESS] (state, addressID, defaultAddressID) {
		state.addressList.splice(state.addressList.findIndex(ele => ele.id === addressID), 1)
		state.addressList.forEach(ele => {
			if (ele.id === defaultAddressID) {
				ele.default = true
			} else {
				ele.default = false
			}
		})
	}
}
export default {
	state,
	mutations
}
