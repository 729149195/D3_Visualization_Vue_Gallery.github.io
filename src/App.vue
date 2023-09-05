<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>  
          <img src="../public/favicon.ico">
          <span>D3 CBBV</span> 
        <nav>
          <RouterLink to="/vis/info"><el-button>Vis Show</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/other"><el-button>Other</el-button></RouterLink>
          <el-divider direction="vertical" border-style="dashed" />
          <RouterLink to="/aboutme"><el-button>About Me</el-button></RouterLink>
      </nav>
    </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
 

</template>

<style scoped lang="scss">
.el-header{
  display: flex;
  align-items: center;
  span{
  display: block;
  margin-right: 20px;
  font-weight: 800;
  background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-size: large;
  }
  img{
    margin-right: 5px;
    width: 140px;
  }
}

@media (min-width: 1024px) {
  .el-header{
  display: flex;
  align-items: center;
  div{
    display: inline;
  }
  span{
  margin-right: 20px;
  font-weight: 800;
  background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-size: large;
  }
  img{
    margin-right: 5px;
    width: 40px;
  }
}
} 
</style>
