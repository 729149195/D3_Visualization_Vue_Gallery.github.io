<template>
  <div class="d3-histogram">
    <h1>Histogram</h1>
    <p>直方图通过将连续值分组为离散的二进制，将一维分布可视化。本示例显示了截至 2016 年 8 月美国各县的失业率。数据： 劳工统计局</p>
    <div class="content">
      <svg id="chart" width="60vw" height="60vw"></svg>
    </div>
  </div>
</template>
  
<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';

onMounted(() => {
  fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(response => response.json())
    .then(data => {
      data = data.data.slice(0, 50)
      // console.log(data)
      const margin = { top: 20, right: 30, bottom: 50, left: 60 };
      const svg = d3.select("#chart");

      function updateChart() {
        const containerWidth = parseInt(svg.style("width"));
        const containerHeight = parseInt(svg.style("height"));
        const width = containerWidth - margin.left - margin.right;
        const height = containerHeight - margin.top - margin.bottom;

        const x = d3.scaleBand()
          .domain(data.map(d => d[0]))
          .range([0, width])
          .padding(0.1);

        const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d[1])])
          .range([height, 0]);

        svg.selectAll("*").remove(); // 清空之前的内容

        const chart = svg.append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

        chart.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", d => x(d[0]))
          .attr("y", d => y(d[1]))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(d[1]))
          .attr("fill", "#4caf50")
          .attr("rx", 5)
          .attr("ry", 5);

        const xAxis = d3.axisBottom(x)
          .tickSizeOuter(0);

        const yAxis = d3.axisLeft(y)
          .tickSizeOuter(0);

        chart.append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0,${height})`)
          .call(xAxis)
          .selectAll("text")
          .attr("transform", "rotate(-45)")
          .style("text-anchor", "end");

        chart.append("g")
          .attr("class", "y-axis")
          .call(yAxis);

        chart.selectAll(".tick line")
          .attr("stroke-dasharray", "2,2")
          .attr("stroke", "#ccc");
      }

      window.addEventListener("resize", updateChart);
      updateChart();

    })
})

</script>

<style scoped lang="scss">
.d3-histogram {
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: 4vw;
    text-align: left;
    font-family: monospace;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

  }
}

@media (min-width: 1024px) {
  .d3-histogram {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 800;
      font-size: 2vw;
      text-align: left;
      font-family: monospace;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
    }


  }
}
</style>
  