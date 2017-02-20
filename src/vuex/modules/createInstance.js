import { INSTANCE_INFO, CHANGE_INSTANCE_CLASS, CHANGE_INSTANCE_SENDATA, GET_NUMBER_INFO, CHANGE_NUMBER, GET_PRICE, ADD_TO_CART, DETELE_CART } from '../mutation-types'
const config = {
	area: {
		sh1: {
			feeType: {
				data: ['按量', '包月'],
				current: 0
			},
			image: false
		},
		sh2: {
			feeType: {
				data: ['按量', '包月'],
				current: 0
			},
			image: true
		},
		bj1: {
			feeType: {
				data: ['按量'],
				current: 0
			},
			image: false
		},
		sh3: {
			feeType: {
				data: ['按量'],
				current: 0
			},
			image: true
		}
	},
	cpu: {
		'2': {
			ram: {
				data: ['1G', '2G', '4G', '8G'],
				current: 1
			}
		},
		'4': {
			ram: {
				data: ['2G', '4G', '8G', '16G'],
				current: 1
			}
		},
		'8': {
			ram: {
				data: ['4G', '8G', '16G', '30G'],
				current: 1
			}
		},
		'16': {
			ram: {
				data: ['8G', '16G', '32G', '48G'],
				current: 1
			}
		}
	}
}
const state = {
	items: [],
	sendData: {
		feeType: '',
		area: '',
		cpu: '',
		ram: ''
	},
	num: {},
	cost: ''
}

const mutations = {
	[INSTANCE_INFO] (state, simpleProduct) {
		state.items = simpleProduct.res.properties
		state.cost = simpleProduct.res.price
		mutations[[CHANGE_INSTANCE_SENDATA]](state)
	},
	[CHANGE_INSTANCE_CLASS] (state, index, itemindex) {
		var configItem = config[state.items[itemindex].name]
		if (configItem) {
			var valConfig = configItem[state.items[itemindex].type[index]]
			for (var item in valConfig) {
				var currentObj = state.items.find(p => p.name === item)
				var currentVal = ''
				if (Object.prototype.toString.call(valConfig[item]) === '[object Object]') {
					currentVal = valConfig[item].data[valConfig[item].current]
					currentObj.type_cn.forEach((val, ind) => {
						val.show = valConfig[item].data.includes(val.name)
						if (val.name === currentVal) {
							currentObj.current = ind
						}
					})
				}
				if (Object.prototype.toString.call(valConfig[item]) === '[object Boolean]') {
					currentObj.show = valConfig[item]
				}
			}
		}
		state.items[itemindex].current = index
	},
	[CHANGE_INSTANCE_SENDATA] (state) {
		Object.keys(state.sendData).forEach(item => {
			let match = state.items.find(p => p.name === item)
			state.sendData[item] = match.type[match.current]
		})
		console.log(state.sendData)
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
