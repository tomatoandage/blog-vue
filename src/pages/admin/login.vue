<template>
	<div class="grid grid-cols-2 h-screen">
		<!-- 默认占两列，order 用于指定排列顺序，md 用于适配非移动端（PC 端） -->
		<div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-slate-900">
			<!-- 指定为 flex 布局，并设置为屏幕垂直水平居中，高度为 100% -->
			<div class="flex justify-center items-center h-full flex-col">
				<h2 class="font-bold text-4xl mb-7 text-white">Blog 博客登录</h2>
				<p class="text-white">一款由 SpringBoot3 + MyBatis-Plus + Vue3 + Vite 开发的前后端分离博客。</p>
				<!-- 指定图片宽度为父级元素的 1/2 -->
				<img src="@/assets/developer.png" class="w-1/2">
			</div>
		</div>
		<div class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white">
			<!-- flex-col 用于指定子元素垂直排列 -->
			<div
				class="flex justify-center items-center h-full flex-col animate__animated animate__bounceInRight animate__fast">
				<!-- 大标题，设置字体粗细、大小、下边框 -->
				<h1 class="font-bold text-4xl mb-5">欢迎回来</h1>
				<!-- 设置 flex 布局，内容垂直水平居中，文字颜色，以及子内容水平方向 x 轴间距 -->
				<div class="flex items-center justify-center mb-7 text-gray-400 space-x-2">
					<!-- 左边横线，高度为 1px，宽度为 16，背景色设置 -->
					<span class="h-[1px] w-16 bg-gray-200"></span>
					<span>账号密码登录</span>
					<!-- 右边横线 -->
					<span class="h-[1px] w-16 bg-gray-200"></span>
				</div>
				<!-- 引入 Element Plus 表单组件，移动端设置宽度为 5/6，PC 端设置为 2/5 -->
				<el-form class="w-5/6 md:w-2/5" ref="formRef" :rules="rules" :model="form">
					<el-form-item prop="username">
						<!-- 输入框组件 -->
						<el-input size="large" v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
					</el-form-item>
					<el-form-item prop="password">
						<!-- 密码框组件 -->
						<el-input size="large" v-model="form.password" type="password" placeholder="请输入密码" :prefix-icon="Lock"
							clearable show-password />
					</el-form-item>
					<el-form-item>
						<!-- 登录按钮，宽度设置为 100% -->
						<el-button class="w-full" :loading="loading" size="large" type="primary" @click="onSubmit">登录</el-button>
					</el-form-item>
				</el-form>

			</div>
		</div>
	</div>
</template>

<script setup>
// 引入 Element Plus 中的用户、锁图标
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/admin/user'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router';
import { showMessage } from '@/composables/util'
import { setToken } from '@/composables/auth';

const router = useRouter()

//定义响应式的表单对象
const form = reactive({
	username: '',
	password: ''
})

//表单引用
const formRef = ref(null)

//表单验证规则
const rules = {
	username: [
		{
			required: true,
			message: '用户名不能为空',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '密码不能为空',
			trigger: 'blur'
		}
	]

}

//登录
const onSubmit = () => {
	console.log('登录')
	formRef.value.validate((valid) => {
		if (!valid) {
			console.log('表单验证不通过')
			return false
		}
		
		loading.value = true

		//调用登录接口
		login(form.username, form.password).then((res) => {
			console.log(res)
			//判断是否成功
			if (res.success == true) {
				showMessage('登陆成功')
				//设置 token
				setToken(res.data.token)
				//跳转到后台首页
				router.push('/admin/index')
			} else {
				let message = res.message
				showMessage(message, 'error')
			}
		})
		.finally(() => {
			loading.value = false
		})
	})
}

//按回车键后，执行登录事件
function onKeyUp(e) {
	console.log(e)
	if (e.key == 'Enter') {
		onSubmit()
	}
}

//添加键盘监听
onMounted(() => {
	console.log('添加键盘监听')
	document.addEventListener('keyup', onKeyUp)
})

//移除键盘监听
onBeforeUnmount(() => {
	document.removeEventListener('keyup', onKeyUp)
})

const loading = ref(null)
</script>
