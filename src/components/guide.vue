<template>
    <div class="container" :style="{'width':containerWidth+'px',
    height:containerWidth/1.5+'px',
    'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
    'position':'relative'
  }" >
      <router-link to ="/search" class="router-link" v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px',}">
        <div class="guide">

        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'guide',
    data () {
      return {
      }
    },
    created:function(){

    },
    computed:{
      containerWidth:function(){
        return window.innerWidth;
      }
    }
  }


</script>

<style scoped>
  .container{

  }
  .test{
    font-size: 1rem;
  }
  .guide{
    width:756/2144rem;
    height:1197/2144rem;
    background-size:756/2144rem 1197/2144rem;
    background-color: blue;
    display:block;
    /*left:893/2144rem;*/
  }
  .router-link{
    display:block;
    background:url('../../static/images/guide.png');
  }
</style>
