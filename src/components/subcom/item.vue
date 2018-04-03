<style scoped>
	.item{
		background:url('../../../static/images/item.jpg') center center no-repeat;
	}
	.item .left {}
	/*跳转*/
	.author-btn{
		display:block;
		font-size: .36rem;
		line-height: 40px;
		text-decoration: none;
		font-family: 'FangSong_GB2312';
		color:#fff;
		font-weight: 700;
	}
	.item .right{
		position: relative;
    overflow: hidden;
	}
	.right>.inner-box{
			position: absolute; left: 0;
	    overflow-x: hidden;
	    overflow-y: scroll;

	}
	.right .content{
		position: relative;
		box-sizing: border-box;
		/*background-color: pink;*/
	}
	.outer-box{
		/*background-color: #baa99a;*/
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

	.stamp-desc .xiangqing,.stamp-desc .yuanyin,.stamp-desc .biankuan{
		/*background-color: green;*/
		/*overflow-y: scroll;*/
		position: relative;
		overflow: hidden;
	}
	.stamp-desc .xiangqing .inner-box,.stamp-desc .biankuan .inner-box,.stamp-desc .yuanyin .inner-box{
		background: url('../../../static/images/desc.png') no-repeat center center;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		position: absolute;
		/*left: 0;*/
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 18px;
    line-height: .6rem;
    text-align: left;
    box-sizing: border-box;
    padding:5px 20px;
    font-family: 'FangSong_GB2312';
    /*padding-right:100px;*/
	}
	.stamp-desc .xiangqing .inner-box .content,.stamp-desc .biankuan .inner-box .content,.stamp-desc .yuanyin .inner-box .content{
			/*background-color: pink;*/
			box-sizing: border-box;
			/*font-size: */
			/*width:90%;*/
	}
	/*印稿图片*/
	.yingao-box,.biankuan-box,.yuanyin-box{
		width:100%;
		box-sizing: border-box;
		padding:40px 0;

		/*background-color:green;*/
	}
	.yingao-box img,.biankuan-box img,.yuanyin-box img{
		width:60%;
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
				<router-link v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*30/2144+'px','lineHeight':containerWidth*50/2144+'px'}" class="author-btn" :to="'/author/'+stampDesc.logiciansId">{{stampDesc.logiciansName}}</router-link>
				<button disabled v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*560/2144+'px','lineHeight':containerWidth*70/2144+'px','backgroundColor':'#d4ccb9'}"></button>
			</div>
			<div class="right fl" v-bind:style="{'width':containerWidth*590/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
					<div class="inner-box">
						<div class="content" v-bind:style="{'width':containerWidth*590/2144+'px','height':containerWidth*996/2144+'px'}">
								<!-- 印稿图片 -->
								<div class="yingao-box" v-for="(item, index) in prevList" v-show="item.src!=='https://api.duyin.ren/wu-small.png'">
									<img :src="item.src" alt="" class="preview-img" @click="$preview.open(index, prevList)">

								</div>
								<!-- 边款图片 -->
								<!-- <div class="biankuan-box">
									<img src="../../../static/images/guide.png" alt=""  data-preview-src="" >
								</div> -->
								<!-- 原印图片 -->
								<!-- <div class="yuanyin-box">
									<img src="../../../static/images/guide.png" alt=""  data-preview-src="" data-preview-group="1" >
								</div> -->


						</div>
					</div>
				</div>
				<!-- 印章详情 -->
		  	<transition
					enter-active-class="animated fadeInRight"
					leave-active-class="animated fadeOutRight"
					>
					<div class="outer-box" v-if="isShow" v-bind:style="{'width':containerWidth*590/2144+'px','height':containerWidth*412/2144+'px','bottom':containerWidth*90/2144+'px','left':containerWidth*50/2144+'px'}">
		  			<div class="inner-box">
			  			<div class="stamp-desc">
			  				<!-- 原印 -->
								<div class="yuanyin" v-bind:style="{
									'width':containerWidth*590/2144+'px','height':containerWidth*137/2144+'px'}">
									<div class="inner-box">
										<div class="content" v-bind:style="{
								'width':containerWidth*540/2144+'px','height':containerWidth*137/2144+'px'}">
											<strong>释文：</strong>{{stampDesc.chars}}
										</div>
									</div>
							</div>
								<!-- 边款 -->
								<div class="biankuan" v-bind:style="{
									'width':containerWidth*590/2144+'px','height':containerWidth*137/2144+'px'}">
											<div class="inner-box">
												<div class="content" v-bind:style="{
										'width':containerWidth*540/2144+'px','height':containerWidth*137/2144+'px'}">
													<strong>边款：</strong>{{stampSideIntro}}
												</div>
											</div>
									</div>
								<!-- 详情 -->
								<div class="xiangqing" v-bind:style="{
									'width':containerWidth*590/2144+'px','height':containerWidth*137/2144+'px'}">
										<div class="inner-box">
											<div class="content" v-bind:style="{
									'width':containerWidth*540/2144+'px','height':containerWidth*137/2144+'px'}">
												<strong>详情：</strong>{{stampIntro}}
											</div>
										</div>
									</div>
			  			</div>
		  			</div>
	  			</div>
				</transition>
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
				isShow:false,
				stampId:'',
				stampDesc: {},
		    stampIntro:null,//详情
		    stampSideIntro:'无',//边款
		    orgMapBean:null,//
		    sideUrl:null,
		    sealUrl:null,
		    activeId: 0, //名家id
		    imgList: [],
				prevList: [
	      ]
			}
		},
		created(){
			this.stampId = this.$route.params.stampId;
			this.loadStampDesc();
		},
		methods:{
			toggleShow(){
				this.isShow=!this.isShow;
			},
			loadStampDesc(){
				let url = common.apidomain+'api/stamp/stampDetailQry';
				let formData = new FormData();
				formData.append('stampId',this.stampId);
				ajax(url,'post',formData,(res)=>{
					if(res.data.code!==200){
						Toast(res.data.msg);
						return;
					}
					var org = {
						src:'https://api.duyin.ren/wu-small.png',
						w:425,
						h:425,
					}
					var seal = {
						src:'https://api.duyin.ren/wu-small.png',
						w:425,
						h:425,
					}
					var side = {
						src:'https://api.duyin.ren/wu-small.png',
						w:425,
						h:425,
					}
	        if (res.data.data.orgMapBean.imgurl!=='null') {
	          org.src = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.orgMapBean.imgurl;
	          let img = new Image();
            img.src = org.src;
            img.onload = function(){
                org.h = img.height;
                org.w = img.width;
            }
	        }
	        if (res.data.data.sealMapBean.imgurl!=='null') {
	          seal.src = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.sealMapBean.imgurl;
	          let img = new Image();
            img.src = seal.src;
            img.onload = function(){
                seal.h = img.height;
                seal.w = img.width;
            }
	        }
	        if (res.data.data.sideImg[0].imgurl!=='null') {
	          side.src = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.sideImg[0].imgurl;
	          let img = new Image();
	           img.src = side.src;
            img.onload = function(){
              side.h = img.height;
              side.w = img.width;
            }
	        }
	        this.prevList = [
		        {
		        	src: org.src,
		        	w:org.w,
		        	h:org.h
		        },
	        	{
	        		src: side.src,
	        		w:side.w,
	        		h:side.h
	        	},
	        	{
	        		src: seal.src,
	        		w:seal.w,
	        		h:seal.h
	        	}
	        ]
	          this.stampDesc=res.data.data;
	        	this.stampIntro=res.data.data.stampIntro||'无';
	        	// this.activeId=res.data.data.logiciansId;
	        if(res.data.data.sideImg[0].chars!=='null'){
	            this.stampSideIntro=res.data.data.sideImg[0].chars;
	        }

	      })

				// });
				// var _this = this;
				//     wx.request({
				//       url: app.globalData.baseUrl + 'api/stamp/stampDetailQry',
				//       data: {
				//         stampId: this.data.stampId
				//       },
				//       success: function(res) {
				//         var orgUrl = 'https://api.duyin.ren/wu-small.png';
				//         var sealUrl = 'https://api.duyin.ren/wu-small.png';
				//         var sideUrl = 'https://api.duyin.ren/wu-small.png';
				//         if (res.data.data.orgMapBean.imgurl!=='null') {
				//           orgUrl = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.orgMapBean.imgurl;
				//           _this.setData({
				//             'orgMapBean':orgUrl
				//           })
				//         }
				//         if (res.data.data.sealMapBean.imgurl!=='null') {
				//           sealUrl = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.sealMapBean.imgurl;
				//           _this.setData({
				//             'sealUrl':sealUrl
				//           })
				//         }
				//         if (res.data.data.sideImg[0].imgurl!=='null') {
				//           sideUrl = 'https://api.duyin.ren/api/aliyun/oss/' + res.data.data.sideImg[0].imgurl;
				//           _this.setData({
				//             'sideUrl':'https://api.duyin.ren/api/aliyun/oss/'+res.data.data.sideImg[0].imgurl
				//           })
				//         }
				//         _this.setData({
				//           'stampDesc': res.data.data,
				//           'stampIntro':res.data.data.sampIntro||'无',
				//           'activeId': res.data.data.logiciansId,
				//           'imgList': [sealUrl + '', sideUrl + '', orgUrl + '']
				//         });
				//         if(res.data.data.sideImg[0].chars!=='null'){
				//           _this.setData({
				//             'stampSideIntro':res.data.data.sideImg[0].chars
				//           })
				//         }
				//       }
				//     });
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
		    return window.innerWidth;
		  }
		}
	}
</script>
