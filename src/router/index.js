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
			},
			{
				path: '/admin/article/list',
				component: import("@/pages/admin/article/article-list.vue"),
				meta: {
					title: 'Admin 文章管理'
				}
			},
			{
				path: '/admin/category/list',
				component: import("@/pages/admin/category/category-list.vue"),
				meta: {
					title: 'Admin 分类管理'
				}
			},
			{
				path: '/admin/tag/list',
				component: import("@/pages/admin/tag/tag-list.vue"),
				meta: {
					title: 'Admin 标签管理'
				}
			},
			{
				path: '/admin/blog/setting',
				component: import("@/pages/admin/settings/index.vue"),
				meta: {
					title: 'Admin 配置管理'
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