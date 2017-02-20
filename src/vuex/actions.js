import shop from '../api/shop'
import * as types from './mutation-types'
export const getSimpleProduct = ({ dispatch }) => {
	shop.getSimpleProduct(simpleProduct => {
		dispatch(types.SIMPLE_PRODUCT, simpleProduct)
	})
}
export const getInstanceInfo = ({ dispatch }, cb) => {
	shop.getInstanceInfo(instanceInfo => {
		dispatch(types.INSTANCE_INFO, instanceInfo)
		cb(instanceInfo)
	})
}
export const getInstanceInfoTest = ({ dispatch }) => {
	shop.getInstanceInfoTest(instanceInfo => {
		console.log(instanceInfo)
	})
}
export const changeInstanceData = ({ dispatch, state }, index, itemindex, url) => {
	dispatch(types.CHANGE_INSTANCE_CLASS, index, itemindex)
	dispatch(types.CHANGE_INSTANCE_SENDATA)
}
export const changeClass = ({ dispatch }, index, itemindex) => {
	dispatch(types.CHANGE_CLASS, index, itemindex)
}

export const changeSendData = ({ dispatch, state }, index, itemindex, url) => {
	dispatch(types.CHANGE_CLASS, index, itemindex)
	dispatch(types.CHANGE_SENDATA)
	url && getPrice({ dispatch, state }, url)
}

export const getNumberInfo = ({ dispatch }, cb) => {
	shop.getNumberInfo(numberInfo => {
		dispatch(types.GET_NUMBER_INFO, numberInfo)
		cb(numberInfo)
	})
}
export const changeNumber = ({ dispatch, state }, number, url) => {
	dispatch(types.CHANGE_NUMBER, number)
	url && getPrice({ dispatch, state }, url)
}
export const addToCart = ({ dispatch, state }) => {
	var params = getParam({ dispatch, state })
	shop.addToCart({
		params,
		cb: data => dispatch(types.ADD_TO_CART, state.simpleProduct)
	})
}
export const deleteCart = ({ dispatch, state }, id) => {
	dispatch(types.DETELE_CART, id)
}

export const getAddress = ({ dispatch, state }) => {
	shop.getAddress(address => {
		dispatch(types.GET_ADDRESS, address)
	})
}
export const addAddressAction = ({ dispatch, state }, params, router) => {
	shop.addAddress({
		params,
		cb: data => {
			data.msg === 'success' && router.push('/address_list')
		}
	})
}
export const deleteAddressAction = ({ dispatch, state }, params) => {
	shop.deleteAddress({
		params,
		cb: data => {
			dispatch(types.DELETE_ADDRESS, params.address_id, data.res.default_address_id)
		}
	})
}
export const chooseDefultAction = ({ dispatch, state }, params, router) => {
	shop.chooseDefultAddress({
		params,
		cb: data => {
			data.msg === 'success' && getAddress({ dispatch, state })
		}
	})
}
export const editAddressAction = ({ dispatch, state }, params, router) => {
	shop.editAddress({
		params,
		cb: data => {
			data.msg === 'success' && router.push('/address_list')
		}
	})
}
export const chooseAddress = ({ dispatch }, item, router) => {
	dispatch(types.CHOOSE_ADDRESS, item)
	router.push('/make_order')
}

export const gotoOrder = ({ dispatch, state }, ids, router) => {
	router.push('/make_order')
	var makeOrderList = state.productList.product_list.filter(item => ids.includes(item.id))
	dispatch(types.GOTO_ORDER, ids, makeOrderList)
}
export const makeOrder = ({ dispatch, state }, ids, router) => {
	shop.makeOrder({
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

var getParam = ({ dispatch, state }) => {
	var { size, color, quality } = JSON.parse(JSON.stringify(state.simpleProduct.sendData))
	var num = JSON.parse(JSON.stringify(state.simpleProduct.num)).currentNum
	return {
		size,
		color,
		quality,
		num
	}
}
export const changeMakeStatus = ({ dispatch, state }, status) => dispatch(types.CHANGE_MAKE_STATUS, status)
// getPrice 也要分离出来
export const getPrice = ({ dispatch, state }, url) => {
	var params = getParam({ dispatch, state })
	shop.getPrice({
		url,
		params,
		cb: cost => dispatch(types.GET_PRICE, cost)
	})
}

