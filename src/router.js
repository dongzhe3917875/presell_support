import Demo from './Demo.vue'
import Index from './Index.vue'
import productList from './components/productList'
import makeOrder from './components/makeOrder'
import address from './components/address'
import addressList from './components/addressList'
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
	path: '/address/add',
	name: 'address',
	component: address
}, {
	path: '/address_list',
	name: 'addressList',
	component: addressList
}]
