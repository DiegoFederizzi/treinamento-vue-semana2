import Vue from 'vue'
import VueRouter from 'vue-router'
import Fipe from '../wger001/view/wger001.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'fipe',
		component: Fipe
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
