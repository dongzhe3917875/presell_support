<template>
	<div>
		<div class="form-group">
			<input type="text" name="" placeholder="姓名" v-model="name">
		</div>
		<div class="form-group">
			<input type="text" name="phone" placeholder="手机号码" v-model="phone">
		</div>
		<add-address :addInfo='addressInfo'></add-address>	
		<div class="form-group">
			<input type="text" name="detail" placeholder="详情地址" v-model="address">
		</div>
		<button v-if='addressInfo.type === "default"' @click="addressAdd">确定添加</button>
		<button v-if='addressInfo.type === "edit"' @click="addressEdit">确定修改</button>
	</div>
</template>
<script>
import addAddress from './addAddress.vue'
import { addAddressAction, editAddressAction } from '../vuex/actions'
export default {
	vuex: {
		actions: {
			addAddressAction,
			editAddressAction
		}
	},
	components: {
		addAddress
	},
	data () {
		return {
			addressInfo: null,
			name: '',
			phone: '',
			address: '',
			address_id: ''
		}
	},
	computed: {
		params () {
			return this.addressInfo
		}
	},
	created () {
		this.addressInfo = this.$route.params.data ? this.$route.params : {
			type: 'default',
			data: {
				province: '1;北京',
				municipality: '1;东城区',
				region: '0;请选择'
			}
		}
		this.name = this.addressInfo.data.name
		this.phone = this.addressInfo.data.phone
		this.address = this.addressInfo.data.address
		this.address_id = this.addressInfo.data.address_id
	},
	methods: {
		addressAdd () {
			var params = Object.assign({}, {
				name: this.name,
				phone: this.phone,
				address: this.address,
				default: false,
				country: '中国'
			}, this.addressInfo.params)
			this.addAddressAction(params, this.$router)
		},
		addressEdit () {
			var params = Object.assign({}, {
				address_id: this.address_id,
				name: this.name,
				phone: this.phone,
				address: this.address,
				country: '中国'
			}, this.addressInfo.params)
			this.editAddressAction(params, this.$router)
		}
	}
}
</script>
<style lang='less'>
	.form-group {
		margin-bottom: 10px;
		input {
			width: 200px;
			height: 20px;
		}
	}
</style>
