<template>
	<div class="address_list">
		<ul>
			<li v-for='(item, index) in addressList' @click='choose(item)'>
			<div class='addressInfo address'>
				<p>
					<span>手机: {{item.phone}}; 姓名：{{item.name}}</span>
				</p>
				<p>
					<span>{{item.province}}; {{item.address}}</span>
				</p>
			</div>
			<div class='addressOperation address'>
				<a href="javascript:;" @click='editAddress(item)'>编辑</a>
			</div>
			<li>
		</ul>
		<a href="javascript:" @click="newAddress">添加新地址</a>
	</div>
</template>
<style lang='less'>
	.address_list li {
		cursor: pointer;
		.address {
			display: inline-block;
			vertical-align: middle;
		}
	}
</style>
<script>
import { addressList } from '../vuex/getters'
import { chooseAddress } from '../vuex/actions'
export default {
	vuex: {
		getters: {
			addressList
		},
		actions: {
			chooseAddress
		}
	},
	methods: {
		choose (item) {
			this.chooseAddress(item, this.$router)
		},
		newAddress () {
			this.$router.push({
				name: 'address',
				params: { type: 'default', data: null }
			})
		},
		editAddress (param) {

		}
	}
}
</script>