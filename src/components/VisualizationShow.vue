<template>
    <div class="content">
      <el-card class="left">
        <nav>
          <RouterLink to="/vis/d3-axis"><el-button>axis</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-chord"><el-button>chord</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-color"><el-button>color</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-interpolate"><el-button>interpolate</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-contour"><el-button>contour</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-delaunay"><el-button>delaunay</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-force"><el-button>force</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-geo"><el-button>geo</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-hierarchy"><el-button>hierarchy</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-polygon"><el-button>polygon</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-quadtree"><el-button>quadtree</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-scale"><el-button>scale</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-scale-chromatic"><el-button>scale-chromatic</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-selection"><el-button>selection</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-shape"><el-button>shape</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-animation"><el-button>animation</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-interaction"><el-button>interaction</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-data"><el-button>data</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-dsv"><el-button>dsv</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-fetch"><el-button>fetch</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-format"><el-button>format</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-random"><el-button>random</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-time"><el-button>time</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-time-format"><el-button>time-format</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-api"><el-button>api</el-button></RouterLink>
      </nav>
      </el-card>
      <el-card class="right">
        <RouterView/>
      </el-card>
    </div>
  </template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped lang="scss">
div{
  display: flex;
  align-items: stretch;
  justify-content: left;
  .left{
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
  }
  .right{
    height: 100vh;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 1024px) {
div{
  display: flex;
  align-items: stretch;
  justify-content: left;
  .left{
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }
  .right{
    height: 100vh;
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}
} 
</style>
  