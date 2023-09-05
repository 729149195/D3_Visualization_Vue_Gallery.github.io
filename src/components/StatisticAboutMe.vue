<template>
    <el-card class="box-card">
    <el-row>
      <el-col :span="6">
        <el-statistic title="Daily active users" :value="268500" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Daily active users" :value="268500" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Total Transactions" :value="172000" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Feedback number" :value="562">
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
  import { ChatLineRound} from '@element-plus/icons-vue'
  </script>
  
  <style scoped>
  .el-col {
    text-align: center;
  }
  .box-card{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  </style>
  