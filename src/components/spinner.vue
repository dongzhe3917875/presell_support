<template>
	<ul class='spinner'>
		<li class="operation" @click="changeNum('minus')"><i class='fa fa-minus'></i></li>
		<input type="text" name="" v-model='num' class='operation number' @blur="changeNum('setting')">
		<li class="operation" @click="changeNum('plus')"><i class='fa fa-plus'></i></li>
	</ul>
</template>
<script>
import { changeNumber, getNumberInfo } from '../vuex/actions'
import { productNumber } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			productNumber
		},
		actions: {
			changeNumber,
			getNumberInfo
		}
	},
	props: ['url'],
	data () {
		return {
			num: 0,
			min: 0,
			max: 0
		}
	},
	watch: {
		num (val) {
			this.changeNumber(val, this.url)
		}
	},
	methods: {
		changeNum (type) {
			let min = this.min
			let max = this.max
			if (Number.isNaN(parseInt(this.num)) || this.num < min) {
				this.num = min
				return false
			}
			if (this.num > max) {
				this.num = max
				return false
			}
			switch (type) {
			case 'plus':
				this.num >= max ? max : this.num++
				break
			case 'minus':
				this.num <= min ? min : this.num--
				break
			}
		}
	},
	created () {
		var _self = this
		this.getNumberInfo(function (info) {
			_self.num = info.currentNum
			_self.min = info.min
			_self.max = info.max
		})
	}
}
</script>