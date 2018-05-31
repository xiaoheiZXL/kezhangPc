<template>
  <div class="container" v-bind:style="{'width':containerWidth+'px',
	  'height':containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'
	}">
    <!-- home-btn -->
    <router-link to="/search" class="home-btn" :style="{'left':containerWidth*892/2144+'px','top':containerWidth*10/2144+'px',
    'backgroundSize':containerWidth*89/2144+'px '+containerWidth*130/2144+'px',
    'width':containerWidth*69/2144+'px','height':containerWidth*130/2144+'px'}"></router-link>
    <div class="author-work clearfix"
         v-bind:style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
      <div class="left fl"
           v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
        <router-link :to="'/author/'+searchResult.logiciansId"
                     v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*30/2144+'px','lineHeight':containerWidth*45/2144+'px'}"
                     class="author-btn">{{searchResult.logiciansName}}
        </router-link>
        <button
          v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*360/2144+'px','lineHeight':containerWidth*70/2144+'px'}"
          class="prev-btn" v-on:click="prevSearch"></button>
        <button
          v-bind:style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*-10/2144+'px','lineHeight':containerWidth*70/2144+'px'}"
          class="next-btn" v-on:click="nextSearch"></button>
      </div>
      <div class="right fl clearfix"
           v-bind:style="{'width':containerWidth*650/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
        <ul class="stamp-list clearfix">
          <li class="stamp-item fl" v-for="(item,index) in searchResult.stampList">
            <router-link :to="'/item/'+item.stampId">
              <div class="top">
                <img :src="'https://api.duyin.ren/api/aliyun/oss/'+item.showImg" alt="">
              </div>
              <p>{{item.chars}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {ajax} from "../../kit/http.js"
  import common from "../../kit/domain.js"
  import {Toast} from "mint-ui"

  export default {
    data() {
      return {
        authorId: '',
        searchResult: [],
        allNum: 0,
        lastNum: 0,
        preAllNum: 0
      }
    },
    computed: {
      containerWidth: function () {
        return window.innerWidth;
      }
    },
    methods: {
      prevSearch() {
        if (this.preAllNum < 0) {
          this.preAllNum = 0;
          // this.isSearched = false;
          Toast('无更多内容');
          return;
        }
        this.search(this.preAllNum, this.lastNum);
      },
      nextSearch() {
        this.search(this.allNum, this.lastNum);
      },
      search(allNum, lastNum) {
        var allNum = (allNum - 0) || 0;
        var lastNum = (lastNum - 0) || 0;
        var url = common.apidomain + 'api/stamp/stampsQuery';
        var formData = new FormData();
        formData.append('logiciansId', this.authorId);
        formData.append('size', 8);
        formData.append('allNum', allNum);
        formData.append('lastNum', lastNum);
        ajax(url, 'post', formData, (res) => {
          // 错误处理
          if (res.data.code !== 200) {
            Toast(res.data.msg)
            return;
          }
          //未请求到数据
          if (res.data.data.stampList.length == 0) {
            Toast('无更多内容');
            return;
          }
          // 设置最新的allNum（用于翻页）
          this.searchResult = res.data.data;
          this.allNum = res.data.data.allNum;
          this.lastNum = res.data.data.stampList.length;
          this.preAllNum = res.data.data.preAllNum;
        })
        // wx.request({
        //   url:app.globalData.baseUrl+'api/stamp/stampsQuery',
        //   type:'post',
        //   data:{
        //     'logiciansId':this.data.activeId,//名家id
        //     'size':8,//每页显示的数据个数
        //     'allNum':allNum,
        //     'lastNum':lastNum
        //   },
        //   dataType:'json',
        //   success:function(res){
        //     // 错误处理
        //     if(res.statusCode!=200){
        //       app.toast('获取名家列表失败');
        //       return;
        //     }
        //     //未请求到数据
        //     if(res.data.data.stampList.length == 0){
        //       app.toast('无更多内容');
        //       return;
        //     }
        //     // 设置最新的allNum（用于翻页）
        //     _this.setData({
        //       'searchResult':res.data.data,
        //       'allNum':res.data.data.allNum,
        //       'lastNum':res.data.data.stampList.length,
        //       'preAllNum':res.data.data.preAllNum,
        //       'disabled':false
        //     });
        //   }
        // });
      }
    },
    created() {
      this.authorId = this.$route.params.authorId;
      this.search();
    }
  }
</script>
<style scoped>
  .container {
    box-sizing: border-box;
  }

  .left {
    background: url('../../../static/images/result-left-bg.png') center center no-repeat;
  }

  .author-work {
    background: url('../../../static/images/author-work-bg.png') center center no-repeat;
  }

  .right {

  }

  .right .stamp-list {
    width: 100%;
    height: 100%;
  }

  .stamp-item {
    width: 25%;
    height: 50%;
    box-sizing: border-box;
    font-size: 14px;

  }

  .stamp-item .top {
    width: 100%;
    height: 50%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 40px 20px;
  }

  .stamp-item img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }

  .stamp-item p {
    width: 20%;
    margin: 0px auto;
    font-family: 'FangSong_GB2312';
    font-size: 18px;
    line-height: 30px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  .home-btn {
    /*background: url('../../../static/images/home-btn.png') no-repeat center center;*/
    position: absolute;
    z-index: 99999;
    /*left: 0;*/
  }
</style>
