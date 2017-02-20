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
const _instanceInfo = {
	'res': {
		'properties': [{
			'itemType': 'choose',
			'name': 'area',
			'current': 2,
			'type': ['sh1', 'sh2', 'bj1', 'sh3'],
			'show': true,
			'type_cn': [{
				name: '上海1区',
				show: true
			}, {
				name: '上海2区',
				show: true
			}, {
				name: '北京A区',
				show: true
			}, {
				name: '上海3区',
				show: true
			}]
		}, {
			'itemType': 'choose',
			'name': 'feeType',
			'current': 0,
			'type': ['count', 'month'],
			'show': true,
			'type_cn': [{
				name: '按量',
				show: true
			}, {
				name: '包月',
				show: true
			}]
		}, {
			'itemType': 'select',
			'name': 'image',
			'type': ['image1', 'image2', 'image3', 'image4'],
			'show': false,
			'type_cn': [{
				value: 'image1',
				name: '镜像1',
				show: true
			}, {
				value: 'image2',
				name: '镜像2',
				show: true
			}, {
				value: 'image3',
				name: '镜像3',
				show: true
			}, {
				value: 'image4',
				name: '镜像4',
				show: true
			}]
		}, {
			'itemType': 'choose',
			'name': 'cpu',
			'current': 1,
			'type': ['2', '4', '8', '16'],
			'show': true,
			'type_cn': [{
				name: '2核',
				show: true
			}, {
				name: '4核',
				show: true
			}, {
				name: '8核',
				show: true
			}, {
				name: '16核',
				show: true
			}]
		}, {
			'itemType': 'choose',
			'name': 'ram',
			'current': 2,
			'type': ['1', '2', '4', '8', '16', '30', '32', '48'],
			'show': true,
			'type_cn': [{
				name: '1G',
				show: false
			}, {
				name: '2G',
				show: true
			}, {
				name: '4G',
				show: true
			}, {
				name: '8G',
				show: true
			}, {
				name: '16G',
				show: true
			}, {
				name: '30G',
				show: false
			}, {
				name: '32G',
				show: false
			}, {
				name: '48G',
				show: false
			}]
		}],
		'price': 101,
		'navigation_img': 'img/navigation.jpg',
		'thumbnails': 'img/thumbnails.jpg',
		'name': 'G-STEP冬季卫衣',
		'unit': '1'
	}
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
	getInstanceInfo (cb) {
		setTimeout(() => cb(_instanceInfo), 100)
	},
	getNumberInfo (cb) {
		ajax({
			url: '/dongzhe/number_info',
			cb: cb
		})
	},
	getInstanceInfoTest (cb) {
		ajax({
			url: '/project/instances/instance_list',
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
		ajax({
			url: '/api/address/all',
			method: 'post',
			cb
		})
	},
	addAddress ({ params, cb }) {
		ajax({
			url: '/api/address/add',
			method: 'post',
			params,
			cb
		})
	},
	deleteAddress ({ params, cb }) {
		ajax({
			url: '/api/address/delete',
			method: 'post',
			params,
			cb
		})
	},
	chooseDefultAddress ({ params, cb }) {
		ajax({
			url: '/api/address/default',
			method: 'post',
			params,
			cb
		})
	},
	editAddress ({ params, cb }) {
		ajax({
			url: '/api/address/modify',
			method: 'post',
			params,
			cb
		})
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

