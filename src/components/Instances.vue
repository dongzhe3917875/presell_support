<template>
	<div>
			<ul>
			<li v-for = '(item, itemindex) in createInstance' v-show='item.show'>
				<ul v-if='item.itemType === "choose"'>
					<h4>{{item.name}}</h4>
					<li v-show='property.show' v-for = '(property, index) in item.type_cn' class='item-style' :class="{choose: item.current == index}" @click= "changeData(index, itemindex)">
						<span>{{property.name}}</span>
					</li>
				</ul>
				<select v-if='item.itemType === "select"' v-model = "imageSelect" @change="changeImageData(imageSelect)">
					<option v-show='property.show' :value='property.value' v-for = '(property, index) in item.type_cn'>
						{{property.name}}
					</option>
				</select>
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
import { getInstanceInfo, changeInstanceData, getInstanceInfoTest } from '../vuex/actions'
import { createInstance, instanceSendData } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			createInstance,
			instanceSendData
		},
		actions: {
			getInstanceInfo,
			changeInstanceData,
			getInstanceInfoTest
		}
	},
	props: ['url'],
	data () {
		return {
			imageSelect: ''
		}
	},
	methods: {
		changeData (index, itemindex) {
			this.changeInstanceData(index, itemindex, this.url)
		},
		changeImageData (imageSelect) {
			console.log(imageSelect)
		}
	},
	created () {
		// this.getInstanceInfo()
		this.getInstanceInfoTest()
	}
}
</script>