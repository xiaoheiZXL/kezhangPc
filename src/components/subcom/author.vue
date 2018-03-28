<template>
	  <div class="container" v-bind:style="{'width':containerWidth+'px',
	  'height':containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'}" >
		<div class="author clearfix" v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
			<div class="left fl" v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
				<div v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*20/2144+'px','lineHeight':containerWidth*70/2144+'px'}" class="author-btn">王福庵</div>
			</div>
		</div>
	</div>
</template>
<script>
	import "../../../static/animate.css"
	import {ajax} from "../../kit/http.js"
	import common from "../../kit/domain.js"
	import {Toast} from "mint-ui"
	export default {
		data(){
			return {}
		},
		methods:{},
		created(){},
		computed:{
		  containerWidth:function(){
		    // console.log(window.innerWidth);
		    return window.innerWidth;
		  }
		}
	}
</script>
<style scoped>
	.author{
		background:url('../../../static/images/author-intro-bg.png') center center no-repeat;
	}
	.author-btn{
		display:block;
		/*background-color: green;*/
		font-size: .36rem;
		line-height: 20px ;
		text-decoration: none;
		font-family: monospace;
		color:#fff;
		font-weight: 700;
	}
</style>
