<template>
<div>
	<div class='price' @click="data1.radio">
	sss
	</div>
	<div v-for='(item, index) in data2'>
		<input type="text" name="" v-model="item.val">
	</div>
</div>

	
</template>
<script>
import shop from '../api/shop'
export default {
	data () {
		return {
			data1: {
				radio: this.click1
			},
			data2: [{
				val: ''
			}]
		}
	},
	methods: {
		click1 () {
			console.log(this.data2[0].val)
		}
	},
	created () {
		// 最基本的用法
		function helloWorld (ready) {
			return new Promise(function (resolve, reject) {
				if (ready) {
					resolve('Hello World!')
				} else {
					reject('Good bye!')
				}
			})
		}
		helloWorld(true).then(function (message) {
			console.log(message)
		}, function (error) {
			console.log(error)
		})

		// 链式调用 then会返回一个promise 且resolve返回的结果会作为下一个resolve的接收函数
		helloWorld(true).then(function (message) {
			return message + '1'
		}, function (error) {
			console.log(error)
		}).then(function (message) {
			return message + '2'
		}).then(function (message) {
			return message + '3'
		}).then(function (message) {
			console.log(message)
		})

		// ajax
		var ajax = (url, type) => {
			return new Promise((resolve, reject) => {
				shop.ajax({
					url,
					cb: (data) => {
						console.log('foo')
						resolve(data)
					}
				})
			})
		}
		// 坑爹的是有一点没有说清楚 如果返回的是个promise，就直接将此作为then的返回结果，本来也要返回一个Promise
		// 如果是一个值 那就返回一个新的promise，将值作为下一个then的resolve接收的值
		// return promise2 = new Promise(function(resolve, reject) {
		// 	try {
		// 		var x = onResolved(self.data)
		// 		if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
		// 			x.then(resolve, reject)
		// 		}
		// 		resolve(x) // 否则，以它的返回值做为promise2的结果
		// 	} catch (e) {
		// 		reject(e) // 如果出错，以捕获到的错误做为promise2的结果
		// 	}
		// })
		ajax('/dongzhe/number_info').then((data) => {
			console.log(data)
			return data
		}).then((data) => {
			return ajax('/dongzhe/number_info')
		}).then((data) => {
			console.log(data)
		})

		Promise.all([ajax('/dongzhe/number_info'), ajax('/dongzhe/number_info'), ajax('/dongzhe/number_info')]).then((value) => {
			console.log('bar')
		})
	}
}
</script>