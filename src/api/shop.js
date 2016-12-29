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

