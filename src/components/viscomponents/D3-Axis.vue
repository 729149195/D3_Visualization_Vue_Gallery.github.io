<template>
    <div class="d3-axis">
      <h1>d3-axis</h1>
      <div class="content">
        <svg width="600" height="600"></svg>
        <p>tables</p>
      </div>
    </div>
  </template>
  
<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
  d3.select('.d3-axis')
})

</script>

<style scoped lang="scss">
.d3-axis{
  display: flex;
  flex-direction: column;
  h1{
    font-weight: 800;
    font-size: 2em;
    text-align: left;
    font-family:monospace;
  }
  .content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
}
</style>
  