/**
 * Mocking client-server processing
 */
var axios = require('axios')
const _products = [{
	'id': 1,
	'title': 'iPad 4 Mini',
	'price': 500.01,
	'inventory': 2
}, {
	'id': 2,
	'title': 'H&M T-Shirt White',
	'price': 10.99,
	'inventory': 10
}, {
	'id': 3,
	'title': 'Charli XCX - Sucker CD',
	'price': 19.99,
	'inventory': 5
}]
const _address = {
	'res': [{
		'province': '1;北京',
		'phone': '13552266949',
		'address_id': 1,
		'name': '范晓宇',
		'address': '酒仙桥6号院电子国际总部',
		'default': 1,
		'country': '中国',
		'region': '5;朝阳区'
	}, {
		'province': '11;河北',
		'phone': '17801078112',
		'address_id': 2,
		'name': '董哲',
		'address': '中华南大街166号神秘基地',
		'default': 0,
		'country': '中国',
		'region': '1;石家庄'
	}],
	'reason': ''
}
function ajax ({
	url,
	params = {},
	cb,
	method = 'get'
}) {
	var basicConfig = {
		method,
		url
	}
	var config = Object.assign({}, basicConfig, (method === 'post' ? {
		data: params
	} : {
		params
	}))
	axios(config)
		.then(function (response) {
			cb(response.data)
		})
		.catch(function (error) {
			console.log(error)
		})
}
export default {
	ajax,
	getProducts (cb) {
		setTimeout(() => cb(_products), 100)
	},
	getNumberInfo (cb) {
		ajax({
			url: '/dongzhe/number_info',
			cb: cb
		})
	},
	getPrice (config) {
		ajax(config)
	},
	makeOrder ({ params, cb }) {
		ajax({
			url: '/dongzhe/make_order',
			params,
			cb
		})
	},
	getAddress (cb) {
		setTimeout(() => cb(_address), 100)
	},
	addToCart ({ params, cb }) {
		ajax({
			url: '/dongzhe/cart/add',
			method: 'post',
			params,
			cb
		})
	},
	getSimpleProduct (cb) {
		ajax({
			url: '/dongzhe/purchase/detail',
			cb: cb
		})
		// setTimeout(() => cb(_simpleProduct), 500)
	},
	buyProducts (products, cb, errorCb) {
		setTimeout(() => {
			// simulate random checkout failure.
			(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ? cb() : errorCb()
		}, 100)
	}
}

