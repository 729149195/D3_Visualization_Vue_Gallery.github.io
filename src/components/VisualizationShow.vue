<template>

  <el-button :icon="Expand" round class="expand-button" @click="drawer = true"/>
  <el-drawer
    v-model="drawer"
    :direction="direction"
    :with-header="false"
    :size="size"
    >
      <nav>
          <RouterLink to="/vis/d3-histogram" @click="drawer = false"><el-button>histogram</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-MLKGMV" @click="drawer = false"><el-button>MLKGMV</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-color" @click="drawer = false"><el-button>color</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-interpolate" @click="drawer = false"><el-button>interpolate</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-contour" @click="drawer = false"><el-button>contour</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-delaunay" @click="drawer = false"><el-button>delaunay</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-force" @click="drawer = false"><el-button>force</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-geo" @click="drawer = false"><el-button>geo</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-hierarchy" @click="drawer = false"><el-button>hierarchy</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-polygon" @click="drawer = false"><el-button>polygon</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-quadtree" @click="drawer = false"><el-button>quadtree</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-scale" @click="drawer = false"><el-button>scale</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-scale-chromatic" @click="drawer = false"><el-button>scale-chromatic</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-selection" @click="drawer = false"><el-button>selection</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-shape" @click="drawer = false"><el-button>shape</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-animation" @click="drawer = false"><el-button>animation</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-interaction" @click="drawer = false"><el-button>interaction</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-data" @click="drawer = false"><el-button>data</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-dsv" @click="drawer = false"><el-button>dsv</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-fetch" @click="drawer = false"><el-button>fetch</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-format" @click="drawer = false"><el-button>format</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-random" @click="drawer = false"><el-button>random</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-time" @click="drawer = false"><el-button>time</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-time-format" @click="drawer = false"><el-button>time-format</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-api" @click="drawer = false"><el-button>api</el-button></RouterLink>
      </nav>
  </el-drawer>
    <div class="content">
      <el-card class="left">
        <nav>
          <RouterLink to="/vis/d3-histogram"><el-button>histogram</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/vis/d3-MLKGMV"><el-button>MLKGMV</el-button></RouterLink>
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
import { Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
const drawer = ref(false)
const direction = ref('ltr')
const size = ref('12em')
</script>

<style scoped lang="scss">
.expand-button{
  margin-bottom: 10px;
  margin-top: -20px;
}
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
    display: none;
  }
  .right{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 1024px) {
.expand-button{
  margin-bottom: 10px;
  margin-top: -20px;
  display: none;
}
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
} 
</style>
  