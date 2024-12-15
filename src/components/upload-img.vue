<template>
  <el-upload action="#" list-type="picture-card" :auto-upload="false">
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (UploadFile) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleDownload = (UploadFile) => {
  console.log(file)
}
</script>