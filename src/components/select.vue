<template>
	<div>
		  <div>
	    <select-simulate v-for="(item, index) in getInfo" v-bind:selectsingle="item.content" v-bind:index="index" v-bind:active="item.active"></select-simulate> 
	    <span v-text="counterValue"></span>
	  </div>
	  <div class='image'>
	  	<p>
	  		<img :src="currentImg">
	  	</p>
	  	<ul>
	  		<li><a href="javascript:;" @click='step("pre")'>上一步</a></li>
	  		<li><a href="javascript:;" @click='step("next")'>下一步</a></li>
	  	</ul>
  	</div>
	</div>
</template>

<script>
import selectSimulate from './select_simulate.vue'
import { getCount, getInfo } from '../vuex/getters'
export default {
	data () {
		return {
			imgs: ['vue1.png', 'vue2.png', 'vue3.png', 'vue4.png'],
			imgIndex: 0
		}
	},
	computed: {
		currentImg () {
			return require('../assets/vue/' + this.imgs[this.imgIndex])
		}
	},
	mounted () {
		console.log('getInfo', getInfo)
	},
	attached () {},
	methods: {
		step (signal) {
			let len = this.imgs.length
			if (signal === 'pre') this.imgIndex--
			if (signal === 'next') this.imgIndex++
			if (this.imgIndex < 0) this.imgIndex = 0
			if (this.imgIndex >= len - 1) this.imgIndex = len - 1
		}
	},
	components: {
		selectSimulate
	},
	vuex: {
		getters: {
			counterValue: getCount,
			getInfo
		}
	}
}
</script>

<style lang="less" src='../select.less'>
</style>
<style lang="less">
	.image {
		text-align: center;
		margin-top: 40px;
		img {
			width: 80%;
		}
		ul {
			li {
				list-style-type: none;
				display: inline-block;
				margin-left: 10px;
				a {
					text-decoration: none;
				}
			}
		}
	}
</style>


