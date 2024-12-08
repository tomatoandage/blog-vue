import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

//导入路由
import router from '@/router'
//引入全局路由守卫
import '@/permission'

//导入Animate.css (Animate.css 是一个跨浏览器的 CSS 动画库，提供了许多预设的、流畅的动画效果。)
import 'animate.css';

//导入NProgress样式
import 'nprogress/nprogress.css'


//导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(router)
app.mount('#app')
