<template>
  <div class="about">
    <h1>This is a show page</h1>
    <h3>Here have some cases of the vis tables</h3>


  </div>
</template>

<script setup>
  import * as d3 from 'd3'
  d3.select('.about').append('h3').text('Hello World')

</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>