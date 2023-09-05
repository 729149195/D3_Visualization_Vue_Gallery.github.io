<template>
    <div>
      <svg width="600" height="500"></svg>
    </div>
  </template>
  
<script setup>
// 引入d3
import * as d3 from 'd3';
import { onMounted } from 'vue';
const data = [99, 71, 78, 25, 36, 92, 55, 77, 100, 3000];
  onMounted(() => {
    const svg = d3.select('svg');
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => 500 - 10 * d)
      .attr('width', 45)
      .attr('height', (d) => d * 10)
      .attr('fill', 'black');
  });
</script>

<style scoped lang="scss">
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg{
        border: 1px solid black;
        border-radius: 2em;
    }
}
</style>
  