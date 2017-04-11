import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import article from './views/article'
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
			path: '/article',
			component: article,
			name: 'article'
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
