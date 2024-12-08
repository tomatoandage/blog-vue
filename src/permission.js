import router from '@/router/index'
import { getToken } from '@/composables/auth'
import { showPageLoading, hidePageLoading, showMessage } from '@/composables/util'

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    console.log("全局路由前置守卫" + to)

    //显示页面加载动画
    showPageLoading()

    //判断是否有token
    let token = getToken()
    if (!token && to.path.startsWith('/admin')) {
        showMessage('请先登录', 'warning')
        next({ path: '/login' })
    }else if (token && to.path == '/login') {
        showMessage('请勿重复登录', 'warning')
        //跳转后台首页
        next({ path: '/admin/index' })
    }else {
        next()
    }
})

//全局路由后置守卫
router.afterEach((to, from) => {
    //动态设置页面 title
    console.log("全局路由后置守卫" + to)
    let title = (to.meta.title ? to.meta.title : '') + ' - Blog'
    document.title = title
    hidePageLoading()
})