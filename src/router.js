import Demo from './Demo.vue'
import Index from './Index.vue'
import productList from './components/productList'
import makeOrder from './components/makeOrder'
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
}]
