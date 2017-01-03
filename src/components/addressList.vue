<template>
	<div class="address_list">
		<ul>
			<li v-for='(item, index) in addressList'>
			<div class='addressInfo address' @click='choose(item)'>
				<p>
					<span>手机: {{item.phone}}; 姓名：{{item.name}}</span>
				</p>
				<p>
					<span>{{item.province|city}};{{item.region|city}};{{item.address}}</span>
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
import { chooseAddress, getAddress } from '../vuex/actions'
export default {
	vuex: {
		getters: {
			addressList
		},
		actions: {
			chooseAddress,
			getAddress
		}
	},
	methods: {
		choose (item) {
			this.chooseAddress(item, this.$router)
		},
		newAddress () {
			this.$router.push({
				name: 'address',
				params: {
					type: 'default',
					data: {
						province: '1;北京',
						region: '1;东城区'
					}
				}
			})
		},
		editAddress (item) {
			this.$router.push({
				name: 'address',
				params: {
					type: 'default',
					data: {
						province: item.province,
						region: item.region
					}
				}
			})
		}
	},
	created () {
		this.getAddress()
	}
}
</script>