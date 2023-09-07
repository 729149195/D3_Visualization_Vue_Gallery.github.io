<template>
  <div class="d3-shape">
    <h1>d3-shape</h1>
    <div class="content">
      <svg width="600" height="600"></svg>
      <code></code>
      <p>tables</p>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
d3.select('.d3-shape')
})

</script>

<style scoped lang="scss">
.d3-shape{
display: flex;
flex-direction: column;
transform: scale(0.6);
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
svg{
  border: 1px solid #222;
  border-radius: 10px;
}
}
}
@media (min-width: 1024px) {
.d3-shape{
display: flex;
flex-direction: column;
transform: scale(1);
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
svg{
  border: 1px solid #222;
  border-radius: 10px;
}
}
}
</style>
