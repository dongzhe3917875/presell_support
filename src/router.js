import Demo from './Demo.vue'
import Index from './Index.vue'
import productList from './components/productList'
import makeOrder from './components/makeOrder'
import address from './components/address'
import addressList from './components/addressList'
import createInstance from './components/createInstance'
import Instances from './components/Instances'
import PromiseComponent from './components/Promise'
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
}, {
	path: '/create_instance',
	name: 'createInstance',
	component: createInstance
}, {
	path: '/instances',
	name: 'instances',
	component: Instances
}, {
	path: '/promise',
	name: 'promise',
	component: PromiseComponent
}]
