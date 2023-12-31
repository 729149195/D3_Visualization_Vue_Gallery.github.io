<template>
  <div class="d3-histogram">
    <h1>Histogram</h1>
    <p></p>
    <div class="content">
      <svg id="chart" width="80vw" height="60vw"></svg>
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
      d3.select("p").text(data.description).append("p").text("FROM: " + data.from_date + " ~ TO: " + data.to_date)
      data = data.data
      // console.log(data)
      const margin = { top: 20, right: 10, bottom: 70, left: 70 };
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
          .attr("x", d => x(d[0]))
          .attr("y", d => y(d[1]))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(d[1]))
          .attr("fill", "#4caf50")
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("class", "bar")
          .append("title")
          .text((d) => { d })

        const xAxis = d3.axisBottom(x)
          .tickValues(x.domain().filter((d, i) => i % 8 === 0)) // 仅显示每隔一个刻度
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

        // 添加x轴标签
        chart.append("text")
          .attr("class", "x-label")
          .attr("x", width / 2 )
          .attr("y", height + margin.top + 45) // 调整y坐标以控制标签位置
          .style("text-anchor", "middle")
          .text("Time →");

        // 添加y轴标签
        chart.append("text")
          .attr("class", "y-label")
          .attr("transform", "rotate(-90)")
          .attr("x", -height /2)
          .attr("y", -margin.left + 20) // 调整y坐标以控制标签位置
          .style("text-anchor", "middle")
          .text("GDP →");

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
  