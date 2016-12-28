<template>
<div class='imitate_select age-select vueSelect'>
  <div class='show_select' v-bind:class='{noborder: ifnoborder}' v-on:click='show_select_click'>
    <span class="show_item" v-text='initdata'></span>
    <span class='caret-wrap'></span>
  </div>
  <ul class='select_all' v-bind:class='{hide_select: if_hide_select}'>
    <li class='select_item' v-for='(item, index) in selectsingle' v-text='item' v-on:click='item_select($event, index)'></li>
  </ul>
</div>
</template>

<script>
import { incrementCounter, changeActive } from '../vuex/actions'
export default {
	vuex: {
		actions: {
			increment: incrementCounter,
			changeActive: changeActive
		}
	},
	data () {
		return {
			initdata: null,
			ifnoborder: false,
			if_hide_select: true,
			current: null,
			documentEvent: false
		}
	},
	props: ['selectsingle', 'index', 'active'],
	computed: {

	},
	mounted () {
		console.log(this.index)
		this.initdata = this.selectsingle[0]
		this.current = this.selectsingle[0]
		if (!this.documentEvent) {
			document.addEventListener('click', function (event) {
				this.ifnoborder = false
				this.if_hide_select = true
			}.bind(this))
			this.documentEvent = true
		}
	},
	watch: {
		active: function (val, oldval) {
			if (!val) {
				this.ifnoborder = false
				this.if_hide_select = true
			}
		}
	},
	attached () {},
	methods: {
		show_select_click (event) {
			event.stopPropagation()
			this.ifnoborder = !this.ifnoborder
			this.if_hide_select = !this.if_hide_select
			this.increment()
			this.changeActive(this.index)
		},
		item_select (event, index) {
			event.stopPropagation()
			this.current = this.selectsingle[index]
			this.initdata = this.current
			this.ifnoborder = false
			this.if_hide_select = true
		}
	},
	components: {}
}
// 我们有了一个新对象 vuex.actions，包含着新的 action。
// 我们没有指定特定的 store, object, state 等等。Vuex 会自动把它们串联好。
// 我们可以用 this.increment() 在任何方法中调用此 action。
// 我们也可以通过 @click 参数调用它，与使用其他普通的 Vue 组件方法并无二致。
// 我们给 action 起名叫 incrementCounter，但是在具体使用时，我们可以根据需要进行重新命名。
</script>

<style lang='css'>
</style>
