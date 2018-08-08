<template>
  <div class="container" :style="{'width':containerWidth+'px',
	  'height':containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'}">
    <!-- home-btn -->
    <a
     href="#"
     class="home-btn"
     @click="goBack"
     :style="{'left':containerWidth*892/2144+'px','top':containerWidth*10/2144+'px',
    'backgroundSize':containerWidth*89/2144+'px '+containerWidth*130/2144+'px',
    'width':containerWidth*69/2144+'px','height':containerWidth*130/2144+'px'}"
    ></a>
    <div class="author clearfix"
         :style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
      <div class="left fl"
           :style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
        <div
          :style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*30/2144+'px','lineHeight':containerWidth*50/2144+'px'}"
          class="author-btn">{{authorInfo.name}}
        </div>
        <router-link
          :style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*560/2144+'px','lineHeight':containerWidth*70/2144+'px'}"
          class="author-work-btn" :to="'/author-work/'+authorInfo.logiciansId"></router-link>
      </div>
      <div class="right fl clearfix"
           :style="{'width':containerWidth*650/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
        <!-- 左侧 -->
        <div class="inner-left fl"
             :style="{'width':containerWidth*325/2144+'px','height':containerWidth*996/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
          <div class="top">
            <div class="photo">
              <img :src="'https://api.duyin.ren/api/aliyun/oss/'+authorInfo.headimgurl" alt="">
            </div>
          </div>
          <div class="bottom">
            <div class="photo">
              <img :src="'https://api.duyin.ren/api/aliyun/oss/'+authorInfo.pstamp" alt="">
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="inner-right fl"
             :style="{'width':containerWidth*325/2144+'px','height':containerWidth*996/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">
          <p>{{authorInfo.intro}}</p>
        </div>
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
    data() {
      return {
        authorId: '',//名家ID
        authorInfo: {},//名家详情
      }
    },
    methods: {
      goBack(){
        window.history.back(-1)
      },
      loadAuthorInfo() {
        let url = common.apidomain + 'api/stamp/logiciansDetailQry';
        let formData = new FormData();
        formData.append('logiciansId', this.authorId);
        ajax(url, 'post', formData, (res) => {
          if (res.data.code !== 200) {
            Toast(res.data.msg);
            return;
          }
          this.authorInfo = res.data.data;
        });
      }
    },
    created() {
      this.authorId = this.$route.params.authorId;
      this.loadAuthorInfo();
    },
    activated(){
      this.authorId = this.$route.params.authorId;
      this.loadAuthorInfo();
    },

    computed: {
      containerWidth: function () {
        return window.innerWidth;
      }
    }
  }
</script>
<style scoped>
  .author {
    background: url('../../../static/images/author-intro-bg.png') center center no-repeat;
  }

  .right {
    /*background-color: rgba(0,0,0,.4);*/
  }

  .inner-left, .inner-right {
    /*background-color: rgba(0,0,0,.4);*/
  }

  .inner-left .top {
    height: 50%;
    /*background-color:yellow;*/
    overflow: hidden;
  }

  .inner-left .top .photo, .inner-left .bottom .photo {
    height: 65%;
    /*background-color:pink;*/
    /*padding:40px;*/
    box-sizing: border-box;
    width: 70%;
    margin: 30px auto;
    border-radius: 10px;
    border: 2px solid #baa99a;
    overflow: hidden;
  }

  .inner-left .bottom .photo {
    border: 2px solid transparent;
  }

  .inner-left .photo > img {
    width: 100%;
    height: 100%;
  }

  .inner-right {
    box-sizing: border-box;
    padding: 30px;
    font-size: 16px;
    font-family: 'FangSong_GB2312';
    color: #a38e70;
    writing-mode: tb-rl;
    overflow-x: auto;
  }

  .inner-right p {
    line-height: 30px;
  }

  /*跳转名家作品按钮*/
  .author-work-btn {
    background-color: transparent;
    display: block;
  }

  .home-btn {
    /*background:rgba(1,1,0,0.5) url('../../../static/images/home-btn.png') no-repeat center center;*/
    position: absolute;
    z-index: 99999;
    /*left: 0;*/
  }
</style>
