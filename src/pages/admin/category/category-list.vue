<template>
	<div>
		<el-card>
			<el-form :inline="true" class="demo-form-inline">
				<el-form-item label="分类名称">
					<el-input v-model="category.name" placeholder="请输入分类名称"></el-input>
				</el-form-item>
				<el-form-item label="创建日期">
					<div class="demo-date-picker">
						<div class="block">
							<el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="To"
								start-placeholder="开始时间" end-placeholder="结束时间" :shortcuts="shortcuts" :size="size" />
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
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="date" label="Date" width="180" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
			</el-table>
			<el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
				:size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
				:total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
		</el-card>
	</div>
</template>
  
<script setup>
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
	console.log(`current page: ${val}`)
}

const category = {
	name: '',
	startTime: '',
	endTime: ''
}

const shortcuts = ref([
	{
		text: 'Last week',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
			return [start, end]
		},
	},
	{
		text: 'Last month',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
			return [start, end]
		},
	},
	{
		text: 'Last 3 months',
		value: () => {
			const end = new Date()
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
			return [start, end]
		},
	},
])

const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
]
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
</style>
