<template>
    <div class="d3-info">
      <div>
        <img src="../../assets/logo.svg" alt="">
        <img src="../../../public/favicon.ico" alt="">
      </div>
      <h1>D3 Visualization</h1>
      <h1>Vue</h1>
      <h1>Gallery</h1>
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
  h1{
    font-weight: 800;
    background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3em;
    text-align: center;
  }
  :nth-child(1){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
      width: 15vw;
    }
  }
} 

@media (min-width: 1024px) {
  .d3-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 10px;
  h1{
    font-weight: 800;
    background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5em;
    text-align: center;
  }
  :nth-child(1){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img{
      width: 8vw;
    }
  }
}
}
</style>
  