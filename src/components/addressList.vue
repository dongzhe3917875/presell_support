<template>
	<div class="address_list">
		<ul>
			<li v-for='(item, index) in addressList'>
			<div class='addressInfo address' @click='choose(item)'>
				<p>
					<span>手机: {{item.phone}}; 姓名：{{item.name}}</span>
				</p>
				<p>
					<span>{{item.province|city}};{{item.municipality|city}};{{item.region|city}};{{item.address}}</span>
					<span v-if="item.default">默认</span>
				</p>
			</div>
			<div class='address'>
				<label @click="chooseDefult(item)"><span v-if="item.default" class="choose circle"></span><span v-else class="circle unchoose"></span>默认地址</label>
				<a href="javascript:;" @click='editAddress(item)'>编辑</a>
				<a href="javascript:;" @click='deleteAddress(item)'>删除</a>
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
			&.addressInfo {
				display: inline-block;
				vertical-align: middle;
				width: 300px;
			}
			.circle {
				display: inline-block;
				width: 20px;
				height: 20px;
				border: 1px solid #f90;
				border-radius: 50%;
				&.choose {
					background-color: #f90;
				}
			}
		}
	}
</style>
<script>
import { addressList } from '../vuex/getters'
import { chooseAddress, getAddress, deleteAddressAction, chooseDefultAction } from '../vuex/actions'
export default {
	vuex: {
		getters: {
			addressList
		},
		actions: {
			chooseAddress,
			getAddress,
			deleteAddressAction,
			chooseDefultAction
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
						municipality: '1;东城区',
						region: '0;请选择'
					}
				}
			})
		},
		deleteAddress (item) {
			var params = {
				address_id: item.id
			}
			this.deleteAddressAction(params)
		},
		chooseDefult (item) {
			var params = {
				address_id: item.id
			}
			this.chooseDefultAction(params, this.$router)
		},
		editAddress (item) {
			this.$router.push({
				name: 'address',
				params: {
					type: 'edit',
					data: {
						address_id: item.id,
						name: item.name,
						phone: item.phone,
						address: item.address,
						province: item.province,
						municipality: item.municipality,
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