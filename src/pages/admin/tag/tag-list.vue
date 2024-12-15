<template>
	<div>
		<!-- 搜索框 -->
		<el-card>
			<el-form :inline="true" class="demo-form-inline">
				<el-form-item label="标签名称">
					<el-input v-model="searchParams.name" placeholder="请输入标签名称"></el-input>
				</el-form-item>
				<el-form-item label="创建日期">
					<div class="demo-date-picker">
						<div class="block">
							<el-date-picker v-model="searchParams.date" type="daterange" unlink-panels range-separator="至"
								start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :size="size" :default-time="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"/>
						</div>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleSearch">查询</el-button>
					<el-button @click="handleReset">重置</el-button>
				</el-form-item>
			</el-form>
		</el-card>
		<el-card>
			<!-- 新增按钮 -->
			<el-button type="primary" @click="dialogFormVisible = true">
				<el-icon>
					<Plus />
				</el-icon>
				&nbsp;新增
			</el-button>
			<!-- 表格 -->
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="name" label="Name" width="400" />
				<el-table-column prop="createTime" label="createTime" width="400" />
			</el-table>
			<el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4"
				:page-sizes="[10, 20, 30, 40]" :size="10" :disabled="disabled" :background="background"
				layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" @size-change="handleSizeChange"
				@current-change="handleCurrentChange" style="display: flex;justify-content: center;"/>
		</el-card>
	</div>
	<!-- 新增分类弹框 -->
	<el-dialog v-model="dialogFormVisible" title="添加文章标签" width="500">
		<el-form :model="form">
			<el-form-item label="请输入标签" :label-width="formLabelWidth">
				<el-input v-model="form.name" autocomplete="off" />
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">
					提交
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
import { addTag, getTagList } from '@/api/admin/tag';
import { ref, reactive, onMounted } from 'vue'

onMounted(() => {
	handleSearch()
})

const dialogFormVisible = ref(false)

const currentPage4 = ref(1)
const pageSize4 = ref(10)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)

const searchParams = reactive({
	name: '',
	date: '',
})

const tableData = ref([])

const handleSearch = () => {
	getTagList(searchParams.name,searchParams.date[0],searchParams.date[1]).then(res => {
		tableData.value = res.data
	}).catch(err => {
		console.log(err)
	})
	console.log('search')
}
const form = reactive({
	name: '',
})

const handleSizeChange = (val) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
	console.log(`current page: ${val}`)
}

const shortcuts = ref([
	{
		text: '最近一周',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
			return [start, end]
		},
	},
	{
		text: '最近一个月',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
			return [start, end]
		},
	},
	{
		text: '最近三个月',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
			return [start, end]
		},
	},
])



</script>

<style scoped>
.demo-form-inline {
	margin: 0 auto;
}

.search-dev {
	padding: auto;
}

.el-card.is-always-shadow {
	margin: 10px;
}
.el-table--fit {
    margin: 20px 0;
    border-bottom: 0;
    border-right: 0;
}
</style>
