<template>
	<el-form :inline="true" class="demo-form-inline">
	  <el-form-item label="分类名称">
		<el-input v-model="formData.categoryName" placeholder="请输入分类名称"></el-input>
	  </el-form-item>
	  <el-form-item label="模糊查询">
		<el-input v-model="formData.keyword" placeholder="请输入模糊查询内容"></el-input>
	  </el-form-item>
	  <el-form-item label="创建日期">
		<el-date-picker
		  v-model="formData.createDate"
		  type="date"
		  placeholder="选择日期">
		</el-date-picker>
	  </el-form-item>
	  <el-form-item label="时间范围">
		<el-time-picker
		  v-model="formData.startTime"
		  placeholder="开始时间"
		  :picker-options="startTimeOptions">
		</el-time-picker>
		<el-time-picker
		  v-model="formData.endTime"
		  placeholder="结束时间"
		  :picker-options="endTimeOptions"
		  style="width: 100%;">
		</el-time-picker>
	  </el-form-item>
	  <el-form-item>
		<el-button type="primary" @click="handleSearch">查询</el-button>
		<el-button @click="handleReset">重置</el-button>
	  </el-form-item>
	</el-form>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		formData: {
		  categoryName: '',
		  keyword: '',
		  createDate: '',
		  startTime: '',
		  endTime: ''
		},
		startTimeOptions: {
		  selectableRange: '18:30:00 - 20:30:00' // 限制时间选择范围，这里只是个示例
		},
		endTimeOptions: {
		  selectableRange: '18:30:00 - 20:30:00' // 同上，实际应用中可能需要根据需求调整
		}
	  }
	},
	methods: {
	  handleSearch() {
		// 在这里处理搜索逻辑，例如发送请求到后端
		console.log(this.formData)
	  },
	  handleReset() {
		// 重置表单数据
		this.formData = {
		  categoryName: '',
		  keyword: '',
		  createDate: '',
		  startTime: '',
		  endTime: ''
		}
	  }
	}
  }
  </script>
  
  <style scoped>
  .demo-form-inline {
	max-width: 600px;
	margin: 0 auto;
  }
  </style>
