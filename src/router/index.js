import { createRouter, createWebHashHistory } from "vue-router";

import Index from '@/pages/frontend/index.vue'

const routes = [
	{
		path: '/',
		component: Index,
		meta: {
			title: 'blog 首页'
		},
	},
	{
		path: '/login',
		component: import('@/pages/admin/login.vue'),
		meta: {
			title: 'blog 登录页'
		},
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router