<template>
	<div class="product-list">
		<router-link to='/add_cart' replace>返回</router-link>
		<h3>商品列表</h3>
		<ul>
			<li v-for='(item, index) in productList'>
				<input type='checkbox' name='product' :value='item.id'  v-model='chooseArray' @change='change'>
				<span>颜色: {{item.properties.color}}</span>
				<span>尺寸: {{item.properties.size}}</span>
				<span>质量: {{item.properties.quality}}</span>
				<span>X {{item.num}}</span>
				<span>价钱: {{item.cost}} 元</span>
				<a href="javascript:;" @click='deletecart(index, item.id)'>删除</a>
			</li>
		</ul>
		<div><input type="checkbox" name="" id="" v-model='ischecked' @change='allCancel'>全选 <span>已选中：{{count}}个 </span><span>总价：{{total}}元</span></div>
		<button @click='makeSure'>确定购买</button>
	</div>
</template>

<script>
import { productList } from '../vuex/getters'
import { deleteCart, gotoOrder } from '../vuex/actions'
import { generate } from '../util/general'
export default {
	watch: {
		ischecked (val) {
			if (val) {
				this.productList.map(ele => {
					if (!this.chooseArray.includes(ele.id)) {
						this.chooseArray.push(ele.id)
					}
				})
			}
		},
		productList () {
			this.ifAllSelect()
		}
	},
	computed: {
		// ids () {
		// 	return this.productList.filter(item => this.chooseArray.includes(item.id))
		// },
		total () {
			return this.productList.filter(item => this.chooseArray.includes(item.id)).reduce(generate(this.add), 0)
		},
		count () {
			return this.chooseArray.length
		}
	},
	name: 'productList',
	vuex: {
		getters: {
			productList
		},
		actions: {
			deleteCart,
			gotoOrder
		}
	},
	data () {
		return {
			chooseArray: [],
			count: '',
			ischecked: false
		}
	},
	methods: {
		ifAllSelect () {
			if (this.chooseArray.length !== this.productList.length) {
				this.ischecked = false
			}
		},
		makeSure () {
			if (this.chooseArray.length) {
				this.gotoOrder(this.chooseArray, this.$router)
				// this.makeOrder(this.chooseArray, this.$router)
			}
		},
		deletecart (index, id) {
			this.deleteCart(id)
			let findIndex = this.chooseArray.findIndex(ele => ele === id)
			if (findIndex >= 0) {
				this.chooseArray.splice(findIndex, 1)
			}
		},
		allCancel () {
			if (!this.ischecked) {
				this.chooseArray = []
			}
		},
		add (a, b) {
			return parseInt(a) + parseInt(b.cost)
		},
		change () {
			this.ifAllSelect()
		}
	}
}
</script>