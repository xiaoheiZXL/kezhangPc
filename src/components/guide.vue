<template>
  <div class="container" v-bind:style="{'width':containerWidth+'rem',
  height:containerWidth/1.5+'rem',
  'backgroundSize':containerWidth+'rem '+containerWidth/1.5+ 'rem'
}" >
    <router-link to="./search">123</router-link>
  </div>
</template>

<script>
  export default {
    name: 'guide',
    data () {
      return {
        // containerWidth:100
      }
    },
    created:function(){

    },
    computed:{
      containerWidth:function(){
        return window.innerWidth/300;
      }
    }
  }


</script>

<style scoped>
  .container{
    /*position: relative;*/
    /*left:50%;*/
    /*transform: translate(-50%,0);*/
  }
  .test{
    font-size: 1rem;
  }
</style>
