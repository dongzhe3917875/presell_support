<template>
	<div>
			<ul>
			<li v-for = '(item, itemindex) in simpleProduct'>
				<ul>
					<h4>{{item.name}}</h4>
					<li v-for = '(property, index) in item.type_cn' class='item-style' :class="{choose: item.current == index}" @click= "changeSendData(index, itemindex)">
						<span>{{property}}</span>
					</li>
				</ul>
			</li>
		</ul>
		<div>
			<p>test proxy image</p>
			<img src='/image/profile1.png'>
		</div>
	</div>
</template>
<style >
	ul, li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.item-style {
		display: inline-block;
		margin-right: 15px;
		border: 1px solid #27bf81;
		padding: 10px 15px;
		cursor: pointer;
	}
	.item-style:hover {
		background-color: #27bf81;
	}
	.choose {
		background-color: #27bf81;
	}
	.item-style span {
		
	}
</style>
<script>
import { getSimpleProduct, changeClass, changeSendData } from '../vuex/actions'
import { simpleProduct } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			simpleProduct
		},
		actions: {
			getSimpleProduct,
			changeClass,
			changeSendData
		}
	},
	props: ['url'],
	data () {
		return {}
	},
	methods: {
		changeData (index, itemindex) {
			this.changeSendData(index, itemindex, this.url)
		}
	},
	created () {
		this.getSimpleProduct()
	}
}
</script>