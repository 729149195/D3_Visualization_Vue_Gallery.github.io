<template>
    <div>
        <h1>About Me</h1>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size = '100'/>
        <BaseInfo/>
        <StatisticAboutMe/>
        <TimelineAboutMe/>
    </div>
</template>

<script setup>
import StatisticAboutMe from '../components/StatisticAboutMe.vue';
import BaseInfo from '../components/BaseInfo.vue';
import TimelineAboutMe from '../components/TimelineAboutMe.vue';
</script>

<style scoped lang="scss">
div{
    h1{
        text-align: center;
    }
    .el-avatar{
        margin: 20px auto;
        display: flex;
    }
}
.el-descriptions__table{
    margin-top: 20px;
    width: 500px;
    background-color: aqua;
}
</style>