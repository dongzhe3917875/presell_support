import shop from '../api/shop'
import * as types from './mutation-types'
export const getSimpleProduct = ({ dispatch }) => {
	shop.getSimpleProduct(simpleProduct => {
		dispatch(types.SIMPLE_PRODUCT, simpleProduct)
	})
}

export const changeClass = ({ dispatch }, index, itemindex) => {
	dispatch(types.CHANGE_CLASS, index, itemindex)
}

export const changeSendData = ({ dispatch, state }, index, itemindex) => {
	dispatch(types.CHANGE_CLASS, index, itemindex)
	dispatch(types.CHANGE_SENDATA)
	getPrice({ dispatch, state })
}

export const getNumberInfo = ({ dispatch }) => {
	shop.getNumberInfo(numberInfo => dispatch(types.GET_NUMBER_INFO, numberInfo))
}
export const changeNumber = ({ dispatch, state }, number, type) => {
	dispatch(types.CHANGE_NUMBER, number, type)
	getPrice({ dispatch, state })
}
export const addToCart = ({ dispatch, state }) => {
	dispatch(types.ADD_TO_CART, state.simpleProduct)
}
export const deleteCart = ({ dispatch, state }, id) => {
	dispatch(types.DETELE_CART, id)
}
export const gotoOrder = ({ dispatch, state }, ids, router) => {
	router.push('/make_order')
	var makeOrderList = state.productList.product_list.filter(item => ids.includes(item.id))
	dispatch(types.GOTO_ORDER, ids, makeOrderList)
}
export const makeOrder = ({ dispatch, state }, ids, router) => {
	shop.processAjax({
		url: '/dongzhe/make_order',
		params: {
			ids
		},
		cb: data => {
			var makeOrderList = state.productList.product_list.filter(item => ids.includes(item.id))
			dispatch(types.MAKE_ORDER, ids, makeOrderList)
			router.push('/cart')
		}
	})
}
export const changeMakeStatus = ({ dispatch, state }, status) => dispatch(types.CHANGE_MAKE_STATUS, status)
export const getPrice = ({ dispatch, state }) => {
	var { size, color, quality } = JSON.parse(JSON.stringify(state.simpleProduct.sendData))
	var num = JSON.parse(JSON.stringify(state.simpleProduct.num)).currentNum
	shop.processAjax({
		url: '/dongzhe/get_price',
		params: {
			size: size,
			color: color,
			quality: quality,
			num: num
		},
		cb: cost => dispatch(types.GET_PRICE, cost)
	})
}
export const incrementCounter = function ({
	dispatch,
	state
}) {
	dispatch('INCREMENT', 1)
}
export const changeActive = function ({
	dispatch,
	state
}, index) {
	dispatch('CHANGEACTIVE', index)
}

