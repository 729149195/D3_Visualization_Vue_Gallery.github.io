<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Menu, UserFilled ,StarFilled} from '@element-plus/icons-vue'
import AllFooter from './components/AllFooter.vue';
</script>

<template>
  <div class="App-View">
    <el-container>
      <div class="box">
       <div class="fixed">
      <el-header>
        <RouterLink to="/" class="logo"><img src="../public/favicon.ico"></RouterLink>
        <span class="title">D3 CBBV</span> 
        <nav>
          <RouterLink to="/vis/info"><el-button round :icon="Menu">Vis Show</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/papers"><el-button round :icon="StarFilled">Papers</el-button></RouterLink>
          <el-divider direction="vertical" />
          <RouterLink to="/aboutme"><el-button round :icon="UserFilled">About Me</el-button></RouterLink>
      </nav>
      <span class="icon">
        <a  class="icon-link" href="https://github.com/729149195/D3_BuildBy_vue.github.io" target="_blank"><svg t="1693968344335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17819" width="25" height="25"><path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z" p-id="17820" fill="#8a8a8a"></path></svg></a>
        <a  class="icon-link" href="https://cn.vuejs.org/guide/introduction.html" target="_blank"><svg t="1693968259928" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16588" width="25" height="26"><path d="M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z" fill="#888888" p-id="16589"></path></svg></a>
      </span>
    </el-header>
    <el-divider class="three-divider">
      <el-icon><Opportunity color="red"/></el-icon>
      <el-icon><Opportunity color="orange"/></el-icon>
      <el-icon><Opportunity color="blue"/></el-icon>
    </el-divider>
    </div>
  </div>
      <el-main>
        <RouterView />
      </el-main>
      <el-divider content-position="right" class="three-divider">D3 CBBV v1.0</el-divider>
      <el-footer>
        <AllFooter/>
      </el-footer>
    </el-container>
  </div>
 

</template>

<style scoped lang="scss">
.el-button{
    font-size: 14px;
  }
.fixed{
  position:relative;
  width: 100%;
}
.el-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 10px;
  .title{
  font-weight: 800;
  background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-size: 20px;
  margin-bottom: 10px;
  }
  img{
    margin-right: 5px;
    width: 60px;
  }
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .icon-link{
    height: 25px;
    width: 25px;
    margin: 10px 10px 0 10px;
  }
  }
  nav{
    margin-right: 0px;
    .el-divider--vertical{
      margin: 4.5px;
    }
  }
}
.three-divider{
    margin: 10px 0 10px 0;
    opacity: 0.8;
 } 

@media (min-width: 1024px) {
  .el-button{
    font-size: 1em;
  }
  .box{
  height: 6vh;
}
  .fixed{
  position: fixed;
  width: 100%;
}
.logo{
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
  .el-header{
  display: flex;
  align-items: center;
  height: auto;
  justify-content: center;
  flex-direction: row;
  background-color: white;
  .title{
  margin-right: 15px;
  font-weight: 800;
  background-image: linear-gradient(to right , #fa0000, #e78700,#0077ff);   //最后三行为文字渐变CSS
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-size: large;
  margin-bottom: 0px;
  }
  img{
    margin-right: 5px;
    width: 40px;
  }
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .icon-link{
    height: 25px;
    width: 25px;
    margin: 0 5px 0 0px;
  }
  }
  nav{
    margin-right: 10px;
    .el-divider--vertical{
      margin: 0.5em;
    }
  }
}
  .three-divider{
    margin: 0;
    opacity: 0.8;
 } 
 
} 
</style>
