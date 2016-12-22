<template>
	<div class="price">
		<span v-text='price + "	元"'></span>
	</div>
</template>
<script>
import { price } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			price
		}
	},
	data () {
		return {}
	},
	created () {

	}
}
</script>