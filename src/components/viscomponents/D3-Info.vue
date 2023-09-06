<template>
    <div class="d3-info">
      <h1>The D3.js Cases</h1>
      <h1> Buided By</h1>
      <h1> Vue3 + Vite</h1>
    </div>
</template>
  
<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
  d3.select('.d3-info')
})


</script>

<style scoped lang="scss">
.d3-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 10px;
  :nth-child(1){
    font-weight: 800;
    background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5em;
    text-align: center;
  }
  :nth-child(2){
    font-weight: 800;
    background-image: linear-gradient(to right ,#0077ff , #e78700,#fa0000);   //最后三行为文字渐变CSS
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
    text-align: center;
  }
  :nth-child(3){
    font-weight: 800;
    background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4em;
    text-align: center;
  }

}
</style>
  