<template>
	<div class='wrapper'>
		<h2>{{title}}</h2>
		<p>font-awesome测试
			<i class='fa fa-fw fa-question'></i>
			<a href="https://gist.github.com/Turbo87/e8e941e68308d3b40ef6">参考链接</a>
		</p>
  	<simple-product></simple-product>
  	<div class='info'>
  		<price></price>
  		<spinner></spinner>
  	</div>
  	<div>
  		<button @click='addToCart'>加入购物车</button><span><router-link to='/cart'>共{{group}}组</router-link></span>
  	</div>
	</div>
</template>
<style src='./main.less' lang='less'></style>
<script>
import store from './vuex/store'
import simpleProduct from './components/simpleProductList.vue'
import spinner from './components/spinner.vue'
import price from './components/price.vue'
import { addToCart } from './vuex/actions'
import { productList } from './vuex/getters'
export default {
	components: { simpleProduct, spinner, price },
	store,
	vuex: {
		actions: {
			addToCart
		},
		getters: {
			productList
		}
	},
	computed: {
		group () {
			return this.productList.length
		}
	},
	data () {
		return {
			title: 'GSTEPS'
		}
	}
}
</script>