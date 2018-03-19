<template>
	  <div class="container" v-bind:style="{'width':containerWidth+'px',
	  'height':containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'
	}" >
		<div class="search clearfix" v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
		  <div class="left fl" v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
		  </div>
		  <div class="center searched fl" v-bind:style="{'width':containerWidth*480/2144+'px','height':containerWidth*1005/2144+'px','marginTop':containerWidth*140/2144+'px','backgroundSize':containerWidth*485/2144+'px '+containerWidth*1005/2144+'px'}">
  	  	<!-- 名家列表 -->
  	  	<transition
  				enter-active-class="animated fadeInRight"
  				leave-active-class="animated fadeOutRight"
  				>
  				<div class="outer-box" v-if="isShow" v-bind:style="{'width':containerWidth*540/2144+'px','height':containerWidth*432/2144+'px','bottom':containerWidth*57/2144+'px'}">
		  			<div class="inner-box">
			  			<div class="author-list">
								<div class="author-item" v-bind:data-sousuo="index" v-bind:class="{'active':authorId==index}" v-for="(item,index) in authorList" v-bind:style ="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px'}" v-on:click="selectAuthor"> ⊙{{item.name}}</div>
			  			</div>
		  			</div>
	  			</div>
  			</transition>
		  </div>
		  <div class="right fl" v-bind:style="{'width':containerWidth*160/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">

					<textarea type="text" name="" id="" v-model="chars" v-bind:style="{'width':containerWidth*50/2144+'px','height':containerWidth*430/2144+'px','marginTop':containerWidth*56/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*160/2144+'px '+containerWidth*1000/2144+'px'}" placeholder="输入文字"></textarea>
					<button class="authorlist" v-bind:style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}" v-on:click="toggleAuthorList">列表</button>
					<button class="searchbtn" v-bind:style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}" v-on:click.prevent="search">搜索</button>
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
	  name: 'guide',
	  data () {
	    return {
	      // containerWidth:100
	      isShow:false,
	      authorList:[
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},
	      	{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	},{
	      		name:'王福庵'
	      	},
	      	{
	      		name:'赵鑫磊'
	      	}
	      ],
	      authorId:-1,//被选择名家id
	      allNum:0,
	      lastNum:0,
	      chars:'',//关键字
	      searchResult:[],//
	      preAllNum:0,
	      // authorSelect:false,//名家选择状态
	    }
	  },
	  created(){

	  },
	  methods:{

	  	toggleAuthorList(){
	  		this.isShow = !this.isShow;
	  	},
	  	loadAuthorList(){
	  		// let url = '';
	  		// let data = {

	  		// };
	  		// ajax(url,'post',data,(res)=>{
	  		// 	console.log(res);
	  		// });
	  	},
	  	// 选择名家
	  	selectAuthor(e){
	  		// console.log(e);
	  		// console.log(e.target.dataset.sousuo);
	  		if(this.authorId==e.target.dataset.sousuo){
	  			this.authorId = -1;
	  		}else{
	  			this.authorId = e.target.dataset.sousuo;
	  		}

	  	},
	  	search(allNUm,lastNum){
	  		var url = common.apidomain + 'api/stamp/stampsQuery';
	  		var allNum = (allNum - 0) || 0;
	  		var lastNum = (lastNum - 0) || 0;
	  		var data = {
	  			'chars':this.chars,
	  			'size':6,
	  			'allNum':allNum,
	  			'lastNum':lastNum
	  		}
	  		console.log(this.authorId);
	  		console.log(this.chars);
	  		 // 未选择名家、已输入搜索关键字
		    if (this.authorId == -1 && this.chars.trim() !== '') {
		    	// 重置列表
		      this.searchResult=[];

		      ajax(url,'post',data,(res)=>{
		      	// console.log('123');
		      	// console.log(res);
      	    if (res.statusCode != 200) {
      	      Toast('获取名家列表失败');
      	      return;
      	    }
      	    //未请求到数据
	          if (res.data.data.stampList.length == 0) {
	            Toast('无更多内容');
	            return;
	          }
	           // 设置最新的allNum（用于翻页）
	           this.searchResult = res.data.data;
	           this.lastNum = res.data.data.stampList.length;
	           this.allNum = res.data.data.allNum;
	           this.preAllNum = res.data.data.preAllNum;
		      })
		    }

		    // 未选择名家、未输入关键字
		    if (this.authorId == -1 && this.chars.trim() == '') {
		      Toast('请输入关键字');
		      return;
		    }

		    // 选择名家、选择文字
		    if (this.authorId !== -1 && this.chars.trim() !== '') {
		      // this.setData({
		      //   'disabled': false
		      // });
		      //
		      var url = common.apidomain+'api/stamp/stampsQuery';
		      var data = {
		      	logiciansId:this.authorId,
		      	chars:this.chars,
		      	allNum:this.allNum,
		      	lastNum:this.lastNum,
		      	size:6
		      };
		      ajax(url,'post',data,(res)=>{
		      	console.log(res);
      	    if (res.statusCode != 200) {
      	      Toast('获取名家列表失败');
      	      return;
      	    }
      	     //未请求到数据
	          if (res.data.data.stampList.length == 0) {
	            Toast('无更多内容');
	            return;
	          }
	            this.searchResult= res.data.data;
	            this.allNum = res.data.data.allNum;
	          	this.lastNum =res.data.data.stampList.length;
	          	this.preAllNum = res.data.data.preAllNum;
	          	this.authorId = res.data.data.logiciansId;
	          	// this.searched: true
		      });

			      // wx.request({
			      //   url: app.globalData.baseUrl + 'api/stamp/stampsQuery',
			      //   type: 'post',
			      //   data: {
			      //     'logiciansId': this.data.activeId, //名家id
			      //     'chars': this.data.chars, //搜索印章关键字
			      //     'allNum': allNum, //
			      //     'lastNum': lastNum,
			      //     'size': 6, //每页显示的数据个数
			      //   },
			      //   dataType: 'json',
			      //   success: function(res) {
			      //     // 错误处理
			      //     if (res.statusCode != 200) {
			      //       app.toast('获取名家列表失败');
			      //       return;
			      //     }
			      //     //未请求到数据
			      //     if (res.data.data.stampList.length == 0) {
			      //       app.toast('无更多内容');
			      //       return;
			      //     }
			      //     _this.setData({
			      //       'searchResult': res.data.data,
			      //       'allNum': res.data.data.allNum,
			      //       'lastNum': res.data.data.stampList.length,
			      //       'preAllNum': res.data.data.preAllNum,
			      //       'firstId': res.data.data.logiciansId,
			      //       'searched': true
			      //     });
			      //   }
			      // });
			      // 关闭名家列表
			      // this.closeAuthorListHandle();
			    }
			    // 选择名家、未选择文字
			    if (this.authorId !== -1 && this.chars.trim() == '') {
			      // this.setData({
			      //   'disabled': false
			      // });
			      // wx.navigateTo({
			      //   url: '../author-intro/author-intro?firstId=' + this.data.activeId
			      // })
			      // 关闭名家列表
			      // this.closeAuthorListHandle();
			      this.$router.push({path:'/'});
			    }


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
	/*中间*/
	.search .center{
		position: relative;
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
		cursor: pointer;
	}
	/*搜索按钮*/
	.authorlist{
		background: url('../../../static/images/author.png') center center no-repeat;
		cursor: pointer;
	}
	/*名家列表*/
	.outer-box{
		background-color: #baa99a;
		position: absolute;
		left:0;
		overflow:hidden;
	}
	.author-list{
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
	.author-list::-webkit-scrollbar {
	    display: none;
	}
	.author-item{
		box-sizing: border-box;
		padding-top:.2rem;
		/*background-color: pink;*/
		font-size: .36rem;
		font-family: monospace;
		border:1px solid #000;
		margin-right:-1px;
		margin-top:-1px;
		cursor:pointer;
	}
	.author-item.active{
		background-color: #fff;
	}
</style>
