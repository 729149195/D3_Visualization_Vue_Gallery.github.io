<template>
  <div class="d3-MLKGMV">
    <h1>d3-MLKGMV</h1>
    <p></p>
    <div class="content">
      <svg id="chart" width="600" height="600"></svg>
    </div>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
  d3.select("p").text("MLKGMV (Machine Learning Knowledge Graph Multi-View)").append("p").text("《A Survey on ML4VIS: Applying Machine Learning Advances to Data Visualization》P11")
  const data_orange = [
    ["Classification", 44],
    ["Regression", 25],
    ["Generative", 13],
    ["Demension Reduction", 12],
    ["Clustering", 4],
    ["Reinforcement", 4],
    ["Semi supervised", 2]
  ];

  const data_blue = [
    ["Data Processing4VIS", 6, 0],
    ["Data-VIS Mapping", 16, 1],
    ["Insight Communication", 4, 1],
    ["Style Imitation", 7, 1],
    ["VIS Reading", 36, 2],
    ["User Profiling", 11, 2],
    ["VIS Interaction", 9, 2]
  ];

  const data_class = [
    ["DATA", 1, "2em", 1, 1],
    ["VIS", 2, "7em", 3, 4.5],
    ["USER", 3, "7em", 9, 10.9]
  ]

  const data_circle = [
    [0, 0, 2], [0, 3, 4], [0, 4, 1], [0, 6, 1],
    [1, 0, 6], [1, 1, 3], [1, 2, 5], [1, 3, 1], [1, 5, 2],
    [2, 0, 4], [2, 1, 1],
    [3, 1, 2], [3, 2, 1], [3, 3, 1], [3, 4, 1], [3, 5, 2],
    [4, 0, 23], [4, 1, 16], [4, 2, 3], [4, 3, 3], [4, 4, 1], [4, 5, 1],
    [5, 0, 5], [5, 1, 2], [5, 2, 4],
    [6, 0, 5], [6, 1, 1], [6, 3, 3], [6, 4, 2], [6, 6, 1],
  ]

  const margin = { top: 45, right: 45, bottom: 45, left: 45 };

  const svg = d3.select("#chart")

  //创建灰色条带用以区分三类VIS
  svg.selectAll("gray_background")
    .data(data_class)
    .enter().append("rect")
    .attr("class", "gray_background")
    .attr("y", d => { return d[3] * 20 + 160 })
    .attr("x", d => d[1] + 72)
    .attr("width", 120)
    .attr("height", d => d[2])
    .attr("fill", "rgb(227, 234, 243)")
    .text(d => d[1])

  svg.selectAll(".text_gray")
    .data(data_class)
    .enter().append("text")
    .attr("class", "text_gray")
    .attr("y", d => { return d[4] * 20 + 225 })
    .attr("x", d => d[1] + 10)
    .attr("transform", d => { return "rotate(-90, " + (d[1] + 25) + ", " + (d[4] * 20 + 183) + ")" })
    .text(d => d[0])

  //生成蓝色柱状图及其横坐标文字
  svg.selectAll(".bar_blue")
    .data(data_blue)
    .enter().append("rect")
    .attr("class", "bar_blue")
    .attr("y", (d, i) => { return i * 39 + 185 })
    .attr("x", 480)
    .attr("width", d => d[1] * 2)
    .attr("height", 30)
    .attr("fill", " rgb(102, 156, 201)")

  svg.selectAll(".text_blue")
    .data(data_blue)
    .enter().append("text")
    .attr("class", "text_blue")
    .attr("y", (d, i) => { return i * 39 + 205 })
    .attr("x", d => { return d[1] * 2 + 485 })
    .attr("fill", "rgb(102, 156, 201)")
    .text(d => d[1])

  svg.selectAll(".text_left_blue")
    .data(data_blue)
    .enter()
    .append("foreignObject") // 允许在svg中使用html
    .attr("class", "text_left_blue")
    .attr("y", (d, i) => { return i * 42 + 180 })
    .attr("x", 75)
    .attr("width", 120)
    .attr("height", "2em")
    .append("xhtml:div")
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-content", "center")
    .style("text-align", "center")
    .style("line-height", "1em")
    .style("font-size", "14px")
    .style("overflow-wrap", "break-word")
    .text(d => d[0]);

  //生成橘色条形图及其横坐标文字
  svg.selectAll(".bar_orange")
    .data(data_orange)
    .enter().append("rect")
    .attr("class", "bar_orange")
    .attr("x", (d, i) => { return i * 39 + 205 })
    .attr("y", 460)
    .attr("width", 30)
    .attr("height", d => d[1] * 2)
    .attr("fill", "rgb(220, 144, 86)")

  svg.selectAll(".text_orange")
    .data(data_orange)
    .enter().append("text")
    .attr("class", "text_orange")
    .attr("x", (d, i) => { return i * 40 + 209 })
    .attr("y", d => d[1] * 2 + 480)
    .attr("fill", "rgb(220, 144, 86)")
    .text(d => d[1])

  svg.selectAll(".text_top_oeange")
    .data(data_orange)
    .enter().append("text")
    .attr("class", "text_top_orange")
    .attr("x", (d, i) => { return i * 40 + 90 })
    .attr("y", 220)
    .text(d => d[0])
    .attr("font-size", "14px")
    .attr("transform", (d, i) => { return "rotate(-45, " + (i * 40 + 100) + ", 50)" });

  //生成7*7矩形表格
  // 创建二维数组表示表格的行和列
  var data = [];
  for (var i = 0; i < 7; i++) {
    var row = [];
    for (var j = 0; j < 7; j++) {
      row.push({ row: i, col: j });
    }
    data.push(row);
  }

  // 创建表格容器
  var table = d3.select("#chart")

  // 创建表格的行
  var rows = table.selectAll(".row")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "row");

  // 创建表格的列
  var cells = rows.selectAll(".cell")
    .data(d => d)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", d => { return d.col * 39 + 200 })
    .attr("y", d => { return d.row * 39 + 180 })
    .attr("width", 39)
    .attr("height", 39)
    .style("stroke-width", "1px"); // 调整边的粗细

  // 设置边框颜色
  cells.style("stroke", "rgb(211,210,210)")
    .style("fill", "none");

  //添加粗边
  table.append("line")//row
    .attr("x1", 200).attr("y1", 219)
    .attr("x2", 473).attr("y2", 219)
  table.append("line")
    .attr("x1", 200).attr("y1", 336)
    .attr("x2", 473).attr("y2", 336)
  table.append("line")//col
    .attr("x1", 278).attr("y1", 180)
    .attr("x2", 278).attr("y2", 453)
  table.append("line")
    .attr("x1", 395).attr("y1", 180)
    .attr("x2", 395).attr("y2", 453)
  table.append("line")
    .attr("x1", 434).attr("y1", 180)
    .attr("x2", 434).attr("y2", 453)

  table.selectAll("line").style("stroke", "rgb(210,210,210)")
    .style("stroke-width", "5px");

  //添加圆圈和数值
  var tables = svg.append("g"); // 创建表格容器
  var colorScale = d3.scaleLinear()
    .domain([0, d3.max(data_circle, d => d[2] * 10)])
    .range(["rgb(210,210,210)", "black"])

  tables.selectAll("circle")
    .data(data_circle)
    .enter()
    .append("circle")
    .attr("class", "circles")
    .attr("cx", d => d[1] * 39 + 220) // 圆心的x坐标
    .attr("cy", d => d[0] * 39 + 200) // 圆心的y坐标
    .attr("r", 15) // 圆的半径
    .style("fill", d => colorScale(d[2] * 10))
    .style("stroke", "black") // 圆圈边的颜色为黑色
    .style("stroke-width", "2px"); // 圆圈边的粗细

  // 在圆圈内显示数值
  svg.selectAll(".circle")
    .data(data_circle)
    .enter().append("text")
    .attr("x", d => d[1] * 39 + 220)
    .attr("y", d => d[0] * 39 + 205)
    .attr("text-anchor", "middle")
    .style("fill", d => {
      if (d[2] <= 4) return "black";
      else return "white";
    }) // 文本的颜色为白色
    .style("font-size", "14px") // 文本的字体大小
    .text(d => d[2]); // 显示数值，这里使用示例数据的值
})

</script>

<style scoped lang="scss">
.d3-MLKGMV {
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
  .bar_blue:hover {
        fill: rgb(47, 136, 209);
    }

    .bar_orange:hover {
        fill: rgb(218, 119, 43);
    }
}

@media (min-width: 1024px) {
  .d3-MLKGMV {
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
    .bar_blue:hover {
        fill: rgb(47, 136, 209);
    }

    .bar_orange:hover {
        fill: rgb(218, 119, 43);
    }

  }
}
</style>
