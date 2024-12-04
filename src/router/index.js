import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: '/',
		component: import('@/pages/frontend/index.vue'),
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
	},
	{
		path: '/admin/index',
		component: import("@/pages/admin/index.vue"),
		meta: {
			title: 'admin 首页'
		}
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router