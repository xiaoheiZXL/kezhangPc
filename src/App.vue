<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
  // console.log('-----------');
  // console.log(window.innerWidth);


  // container.style.width = width+'px';

</script>

<style>
  #app {
    font-family: 'FangSong_GB2312';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:1000px;
  }

</style>
