import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
	{
		path: '/',
		component: import('@/pages/frontend/index.vue'),
		meta: {
			title: 'Blog 首页'
		},
	},
	{
		path: '/login',
		component: import('@/pages/admin/login.vue'),
		meta: {
			title: 'Blog 登录页'
		},
	},
	{
		path: '/admin',
		component: import('@/layouts/admin/admin.vue'),
		children: [
			{
				path: '/admin/index',
				component: import("@/pages/admin/index.vue"),
				meta: {
					title: 'Admin 后台首页'
				}
			}
		]
	},
	
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router