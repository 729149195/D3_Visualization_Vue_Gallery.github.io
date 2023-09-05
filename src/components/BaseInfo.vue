<template>
    <div>
        <el-card class="box-card">
        <el-descriptions title="Base Info">
            <el-descriptions-item label="Name:">Zhang ZhangXuan</el-descriptions-item>
            <el-descriptions-item label="Phone:">15959792707</el-descriptions-item>
            <el-descriptions-item label="Remarks:">
            <el-tag size="small">Student</el-tag>
         </el-descriptions-item>
        </el-descriptions>
        </el-card>
    </div>
</template>

<script setup>

</script>

<style scoped>  
 .box-card{
    margin-top: 10px;
    margin-bottom: 10px;
}
.el-descriptions__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>