<template>
	<ul class='spinner'>
		<li class="operation" @click="changeNumber(productNumber.currentNum, 'minus')"><i class='fa fa-minus'></i></li>
		<input type="text" name="" v-model='productNumber.currentNum' class='operation number' @blur="changeNumber(productNumber.currentNum, 'setting')">
		<li class="operation" @click="changeNumber(productNumber.currentNum, 'plus')"><i class='fa fa-plus'></i></li>
	</ul>
</template>
<script>
import { changeNumber, getNumberInfo, getPrice } from '../vuex/actions'
import { productNumber } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			productNumber
		},
		actions: {
			changeNumber,
			getNumberInfo,
			getPrice
		}
	},
	data () {
		return {}
	},
	created () {
		this.getNumberInfo()
	}
}
</script>