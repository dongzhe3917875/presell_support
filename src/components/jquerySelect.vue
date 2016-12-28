<template lang='jade'>
div.jqjqselectWrapper
  h3 jqSelectDemo
  div.imitate_select.name-select.jqselect
    div.show_select
      span.show_item 目录
      span.caret-wrap
    ul.select_all.hide_select
      li.select_item 目录
      li.select_item 文件后缀文件后缀
      li.select_item 精确匹配
  div.imitate_select.age-select.jqselect
    div.show_select
      span.show_item 20-30
      span.caret-wrap
    ul.select_all.hide_select
      li.select_item 20-30
      li.select_item 30-40
      li.select_item 40-50
  div.image
    p
      img(:src="currentImg")
    ul
      li
        a(href='javascript:;', @click='step("pre")') 上一步
        a(href='javascript:;', @click='step("next")') 下一步
</template>
<script>
import $ from 'jquery'
import select from 'plugin/jquery.select.js'
export default {
	mounted () {
		var selectMap = new WeakMap()
		select.call($('.jqselect'), { selectMap })
	},
	data () {
		return {
			imgs: ['jq1.png', 'jq2.png', 'jq3.png'],
			imgIndex: 0
		}
	},
	computed: {
		currentImg () {
			return require('../assets/jquery/' + this.imgs[this.imgIndex])
		}
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
	}
}
</script>
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