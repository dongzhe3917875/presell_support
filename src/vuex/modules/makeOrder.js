import { GOTO_ORDER, MAKE_ORDER, CHANGE_MAKE_STATUS } from '../mutation-types'
const state = {
	makeOrderList: [],
	makeSure: false
}
const mutations = {
	[GOTO_ORDER] (state, ids, makeOrderList) {
		state.makeOrderList = makeOrderList
	},
	[MAKE_ORDER] (state, makeOrderList, router) {
		state.makeSure = true
		state.makeOrderList = []
	},
	[CHANGE_MAKE_STATUS] (state, status) {
		state.makeSure = status
	}
}
export default {
	state,
	mutations
}
