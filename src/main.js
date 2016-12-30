// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import Index from './Index'
import store from './vuex/store'
import {
	currency
} from './currency'
import 'font-awesome/css/font-awesome.css'
Vue.filter('currency', currency)
Vue.use(VueRouter)
var router = new VueRouter({
	mode: 'history',
	routes
})
// router.replace({ path: '/add_cart' })
var vm = new Vue({
	el: '#app',
	store,
	router,
	render: h => h(Index)
})
console.log(vm)

