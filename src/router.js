import Demo from './Demo.vue'
import Index from './Index.vue'
import productList from './components/productList'
import makeOrder from './components/makeOrder'
import select from './components/select'
import jquerySelect from './components/jquerySelect'
export default [{
	path: '/',
	component: Index
}, {
	path: '/add_cart',
	component: Demo
}, {
	path: '/cart',
	component: productList
}, {
	path: '/make_order',
	component: makeOrder
}, {
	path: '/vue_select_simulate',
	component: select
}, {
	path: '/jquery_select_simulate',
	component: jquerySelect
}]
