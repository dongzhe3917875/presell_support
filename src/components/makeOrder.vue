<template>
	<div>
		<div class='address'>
			<a href="javascript:;" @click='addAddress'>
				<ul>
					<li>
						<span>手机: {{CchooseAddr.phone}}; 姓名：{{CchooseAddr.name}}</span>
					</li>
					<li>
						<span>{{CchooseAddr.province}}; {{CchooseAddr.address}}</span>
					</li>
				</ul>
			</a>
			<!-- <a href="javascript:;" @click='chooseAddress'>选择地址</a> -->
		</div>
		<ul>
			<li v-for='(item, index) in makeOrderList'>
				<span>颜色: {{item.properties.color}}</span>
				<span>尺寸: {{item.properties.size}}</span>
				<span>质量: {{item.properties.quality}}</span>
				<span>X {{item.num}}</span>
				<span>价钱: {{item.cost}} 元</span>
			</li>
		</ul>
		<div><span>总价：{{total}}</span></div>
		<div><button @click='makePurchase'>微信支付</button></div>
		<div v-show='isShow'>
			<p>确定要退回到购物车吗？</p>
			<button @click='makesure'>确定</button>
			<button @click='makegiveup'>放弃</button>
		</div>
	</div>
	
</template>
<style lang='less'>
	.addAddress {
		display: block;
	}
</style>
<script>
import { makeOrderList, makeSure, defaultAddress, chooseAddr } from '../vuex/getters'
import { generate } from '../util/general'
import { makeOrder, changeMakeStatus, getAddress } from '../vuex/actions'
export default {
	vuex: {
		getters: {
			makeOrderList,
			makeSure,
			defaultAddress,
			chooseAddr
		},
		actions: {
			makeOrder,
			changeMakeStatus,
			getAddress
		}
	},
	data () {
		return {
			isShow: false,
			address: false
		}
	},
	computed: {
		CchooseAddr () {
			return this.chooseAddr || this.defaultAddress
		},
		total () {
			return this.makeOrderList.reduce(generate(this.add), 0)
		},
		ids () {
			return Array.from({ length: this.makeOrderList.length }, (v, k) => this.makeOrderList[k].id)
		}
	},
	methods: {
		addAddress () {
			this.address = true
			this.$router.push({
				name: 'addressList'
				// params: { type: 'default', data: null }
			})
		},
		makePurchase () {
			this.makeOrder(this.ids, this.$router)
		},
		makesure () {
			this.isShow = false
			this.changeMakeStatus(true)
			this.$router.go(-1)
		},
		makegiveup () {
			this.isShow = false
			this.changeMakeStatus(false)
		},
		add (a, b) {
			return parseInt(a) + parseInt(b.cost)
		}
	},
	beforeRouteLeave (to, from, next) {
		if (this.address) {
			next()
			this.address = false
			return
		}
		this.isShow = true
		if (this.makeSure) {
			next()
			return
		}
		next(false)
	},
	mounted () {
		this.changeMakeStatus(false)
		this.isShow = false
	},
	created () {
		this.getAddress()
	}
}
</script>