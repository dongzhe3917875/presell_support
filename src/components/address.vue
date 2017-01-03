<template>
	<div>
		<div class="form-group">
			<input type="text" name="" placeholder="姓名">
		</div>
		<div class="form-group">
			<input type="text" name="phone" placeholder="手机号码">
		</div>
		<add-address :addInfo='addressInfo'></add-address>	
		<div class="form-group">
			<input type="text" name="detail" placeholder="详情地址">
		</div>
	</div>
</template>
<script>
import addAddress from './addAddress.vue'
export default {
	components: {
		addAddress
	},
	data () {
		return {
			addressInfo: null
		}
	},
	created () {
		this.addressInfo = this.$route.params
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
