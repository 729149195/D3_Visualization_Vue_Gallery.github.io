<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="6">
        <el-statistic title="Daily active users" :value="666" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Feedback number" :value="666">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
  </el-card>
</template>
  
<script lang="ts" setup>
import { ChatLineRound } from '@element-plus/icons-vue'
</script>
  
<style scoped>
.el-col {
  text-align: center;

}

.el-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.box-card {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
  