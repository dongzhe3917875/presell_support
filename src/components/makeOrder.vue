<template>
	<div>
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
<script>
import { makeOrderList, makeSure } from '../vuex/getters'
import { generate } from '../util/general'
import { makeOrder, changeMakeStatus } from '../vuex/actions'
export default {
	vuex: {
		getters: {
			makeOrderList,
			makeSure
		},
		actions: {
			makeOrder,
			changeMakeStatus
		}
	},
	data () {
		return {
			isShow: false
		}
	},
	computed: {
		total () {
			return this.makeOrderList.reduce(generate(this.add), 0)
		},
		ids () {
			return Array.from({ length: this.makeOrderList.length }, (v, k) => this.makeOrderList[k].id)
		}
	},
	methods: {
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
	}
}
</script>