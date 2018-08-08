<template>
  <div id="app">
      <keep-alive>
          <!--<router-view v-if="$route.meta.keep_alive"></router-view>-->
          <!--<router-view v-if="$route.meta.keep_alive"></router-view>-->
      <!--</keep-alive>-->
      <!--<router-view v-if="!$route.meta.keep_alive"></router-view>-->
      <!--.keep_alive">-->
    <router-view/></keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
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
