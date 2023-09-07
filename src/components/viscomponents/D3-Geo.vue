<template>
  <div class="d3-geo">
    <h1>d3-geo</h1>
    <div class="content">
      <svg width="60vw" height="60vw"></svg>
      <code></code>
      <p>tables</p>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
d3.select('.d3-geo')
})

</script>

<style scoped lang="scss">
.d3-geo{
display: flex;
flex-direction: column;
h1{
  font-weight: 800;
  font-size: 5vw;
  text-align: left;
  font-family:monospace;
}
.content{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
svg{
  border: 1px solid #222;
  border-radius: 10px;
}
}
}
@media (min-width: 1024px) {
.d3-geo{
display: flex;
flex-direction: column;
h1{
  font-weight: 800;
  font-size: 3vw;
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
svg{
  border: 1px solid #222;
  border-radius: 10px;
}
}
}
</style>
