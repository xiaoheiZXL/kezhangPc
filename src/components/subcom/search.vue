<template>
	  <div class="container" v-bind:style="{'width':containerWidth+'px',
	  height:containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'
	}" >
		<div class="search clearfix" v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
		  <div class="left fl" v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">

		  </div>
		  <div class="center searched fl" v-bind:style="{'width':containerWidth*480/2144+'px','height':containerWidth*1005/2144+'px','marginTop':containerWidth*140/2144+'px','backgroundSize':containerWidth*485/2144+'px '+containerWidth*1005/2144+'px'}">

		  </div>
		  <div class="right fl" v-bind:style="{'width':containerWidth*160/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
					<textarea type="text" name="" id="" v-bind:style="{'width':containerWidth*50/2144+'px','height':containerWidth*430/2144+'px','marginTop':containerWidth*56/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*160/2144+'px '+containerWidth*1000/2144+'px'}" placeholder="输入文字"></textarea>
					<button class="authorlist" v-bind:style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}">列表</button>
					<button class="searchbtn" v-bind:style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}">搜索</button>
		  </div>
		</div>
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
	      // console.log(window.innerWidth);
	      return window.innerWidth;
	    }
	  }
	}

</script>
<style scoped>
.container{
	box-sizing: border-box;
}
	.search{
		/*background-color: pink;*/
		background:url('../../../static/images/search-bg.png') center center no-repeat;
	}
	.search .left{
		/*width:.75rem;*/
		/*height:1rem;*/
		background:url('../../../static/images/result-left-bg.png') center center no-repeat;
	}
	.search .right {
		text-align: center;
		background:url('../../../static/images/search-box.png') center center no-repeat;
	}
	.search .center{

	}
	.search .center.searched{
		/*background:url('../../../static/images/search-bg2.png') center center no-repeat;*/
	}
	textarea{
		padding-top:.2rem;
	}
	button{
		color:transparent;
	}
	/*名家列表*/
	.searchbtn{
		background: url('../../../static/images/search-btn.png') center center no-repeat;
	}
	/*搜索按钮*/
	.authorlist{
		background: url('../../../static/images/author.png') center center no-repeat;
	}
</style>
