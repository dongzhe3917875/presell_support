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

// const _simpleProduct = [{
// 	name: 'color',
// 	current: 0,
// 	data: ['red', 'green', 'yellow']
// }, {
// 	name: 'size',
// 	current: 1,
// 	data: ['M', 'L', 'XL', 'XXL']
// }, {
// 	name: 'quality',
// 	current: 2,
// 	data: ['MORMAL', 'GOOD', 'EXCELLENT']
// }]
function processAjax ({ url, params = {}, cb }) {
	axios.get(url, { params })
		.then(function (response) {
			cb(response.data)
		})
		.catch(function (error) {
			console.log(error)
		})
}
export default {
	processAjax,
	getProducts (cb) {
		setTimeout(() => cb(_products), 100)
	},
	getNumberInfo (cb) {
		processAjax({
			url: '/api/number_info',
			cb: cb
		})
	},
	getSimpleProduct (cb) {
		processAjax({
			url: '/api/test',
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

