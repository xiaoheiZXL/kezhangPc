<style scoped>
	.item{
		background:url('../../../static/images/item.jpg') center center no-repeat;
	}
	.item .left {}
	/*跳转*/
	.author-btn{
		display:block;
		/*background-color: green;*/
		font-size: .36rem;
		line-height: 40px;
		text-decoration: none;
		font-family: monospace;
		color:#fff;
		font-weight: 700;
	}
	.item .right{
		background-color: pink;
		position: relative;
	}
	.outer-box{
		background-color: #baa99a;
		position: absolute;
		left:0;
		overflow:hidden;
	}
	.stamp-desc{
		position: absolute;
		left:0;
		width:100%;
		height:100%;
		display:flex;
		flex-direction:row-reverse;
		flex-wrap:wrap;
		overflow-y:scroll;
		box-sizing: border-box;
	}
	 /* for Chrome */
	.stamp-desc::-webkit-scrollbar {
	    display: none;
	}
	/*切换显示按钮*/
	.show-desc{
		display:block;
		background-color: transparent;
		color:transparent;
	}
</style>
<template>
  <div class="container" v-bind:style="{'width':containerWidth+'px',
  'height':containerWidth/1.5+'px',
  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
  'position':'relative'
	}" >
		<div class="item clearfix" v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
			<div class="left fl" v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
				<router-link v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*20/2144+'px','lineHeight':containerWidth*70/2144+'px'}" class="author-btn" to="/">王福庵</router-link>
			</div>
			<div class="right fl" v-bind:style="{'width':containerWidth*590/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
				<!-- 印章详情 -->
		  	<transition
					enter-active-class="animated fadeInRight"
					leave-active-class="animated fadeOutRight"
					>
					<div class="outer-box" v-if="isShow" v-bind:style="{'width':containerWidth*590/2144+'px','height':containerWidth*412/2144+'px','bottom':containerWidth*0/2144+'px','left':containerWidth*0/2144+'px'}">
		  			<div class="inner-box">
			  			<div class="stamp-desc">
			  				<!-- 原印 -->
								<div class="yuanyin"></div>
								<!-- 边款 -->
								<div class="biankuan"></div>
								<!-- 详情 -->
								<div class="xiangqing"></div>
			  			</div>
		  			</div>
	  			</div>
				</transition>
				</div>
				<button class="show-desc" v-bind:style="{'width':containerWidth*60/2144+'px','height':containerWidth*460/2144+'px','marginTop':containerWidth*685/2144+'px'}" v-on:click="toggleShow">
					搜索
				</button>
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
			return {
				isShow:false
			}
		},
		methods:{
			toggleShow(){
				this.isShow=!this.isShow;
			}
		},
	  transitions:{
			'show':{
				enterClass:"fadeInRight",
				leaveClass:"fadeOutRight"
			}
		},
		computed:{
		  containerWidth:function(){
		    // console.log(window.innerWidth);
		    return window.innerWidth;
		  }
		}
	}
</script>
