import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import con from './views/con'
import theme from './views/theme'
Vue.use( Router )
const router = new Router( {
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: home,
			name: 'home'
		},
		{
			path: '/con',
			component: con,
			name: 'con'
		},
		{
			path: '/theme',
			component: theme,
			name: 'theme'
		},
		{
			path: '*',
			redirect: '/'
		}
	]
} )
export default router
