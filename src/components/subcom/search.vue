<template>
  <div
    class="container"
    :style="{'width':containerWidth+'px',
	  'height':containerWidth/1.5+'px',
	  'backgroundSize':containerWidth+'px '+containerWidth/1.5+'px',
	  'position':'relative'
	}"
  >
    <!-- home-btn -->
    <a
     href="#"
     class="home-btn"
     @click="goBack"
     :style="{'left':containerWidth*892/2144+'px','top':containerWidth*10/2144+'px',
    'backgroundSize':containerWidth*89/2144+'px '+containerWidth*130/2144+'px',
    'width':containerWidth*69/2144+'px','height':containerWidth*130/2144+'px'}"
    ></a>
    <div
        class="search clearfix"
        :style="{'width':containerWidth*756/2144+'px','height':containerWidth*1230/2144+'px','position':'absolute','left':containerWidth*895/2144+'px','backgroundSize':containerWidth*756/2144+'px '+containerWidth*1230/2144+'px','top':0}">
      <div
        class="left fl"
        :style="{'width':containerWidth*52/2144+'px','height':containerWidth*995/2144+'px','backgroundSize':containerWidth*52/2144+'px '+containerWidth*995/2144+'px','marginTop':containerWidth*146/2144+'px'}">
        <router-link
            :to="'/author/'+searchResult.logiciansId"
            :style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*30/2144+'px','lineHeight':containerWidth*45/2144+'px'}"
            class="author-btn"
            v-show="searchResult.logiciansId"
        >
            {{searchResult.logiciansName}}
        </router-link>
        <button
            :disabled="isDisabled"
            :style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*360/2144+'px','lineHeight':containerWidth*70/2144+'px'}"
            class="prev-btn"
            @click="prevSearch()">
        </button>
        <button
            :disabled="isDisabled"
            :style="{'width':containerWidth*52/2144+'px','height':containerWidth*195/2144+'px','marginTop':containerWidth*-10/2144+'px','lineHeight':containerWidth*70/2144+'px'}"
            class="next-btn"
            @click="nextSearch()"
        ></button>
      </div>
      <div
        class="center fl"
        :style="{'width':containerWidth*480/2144+'px','height':containerWidth*1005/2144+'px','marginTop':containerWidth*140/2144+'px','backgroundSize':containerWidth*485/2144+'px '+containerWidth*1005/2144+'px'}"
        :class="{searched:isSearched}"
        >
        <div
            class="search-result"
            :style="{'width':containerWidth*480/2144+'px','height':containerWidth*1005/2144+'px','backgroundSize':containerWidth*485/2144+'px '+containerWidth*1005/2144+'px'}"
        >
          <ul class="stamp-list clearfix">
            <li
                class="stamp-item fl"
                v-for="(item,index) in searchResult.stampList"
            >
              <router-link :to="'/item/'+item.stampId">
                <div class="top">
                  <img :src="'https://api.duyin.ren/api/aliyun/oss/'+item.showImg">
                </div>
                <p>{{item.chars}}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 名家列表 -->
          <div
            id="authorList"
            class="outer-box"
            :style="{'height':containerWidth*432/2144+'px','bottom':containerWidth*57/2144+'px','left':containerWidth*432/2144+'px'}"
          >
            <div class="inner-box">
              <div class="author-list">
                <div
                    class="author-item"
                    :data-sousuo="item.logiciansId"
                    :class="{'active':authorId==item.logiciansId}"
                    v-for="(item,index) in authorList"
                    :style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px'}"
                    @click="selectAuthor">⊙{{item.name}}
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="right fl"
           :style="{'width':containerWidth*160/2144+'px','height':containerWidth*996/2144+'px','marginTop':containerWidth*146/2144+'px','backgroundSize':containerWidth*170/2144+'px '+containerWidth*996/2144+'px'}">

        <textarea
            type="text"
            class="input-area"
            v-model="chars"
            :style="{'width':containerWidth*50/2144+'px','height':containerWidth*430/2144+'px','marginTop':containerWidth*56/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*160/2144+'px '+containerWidth*1000/2144+'px'}"
            placeholder="输入文字"></textarea>
        <button
            class="authorlist"
            :style="{'width':containerWidth*108/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}"
            @click="toggleAuthorList()"
        >列表
        </button>
        <button
            class="searchbtn"
            :style="{'width':containerWidth*60/2144+'px','height':containerWidth*216/2144+'px','marginLeft':containerWidth*15/2144+'px','backgroundSize':containerWidth*60/2144+'px '+containerWidth*216/2144+'px'}"
            @click.prevent="search"
        >
            搜索
        </button>
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
    data() {
      return {
        // containerWidth:100
        authorList: [],
        isDisabled: true,
        authorId: -1,//被选择名家id
        allNum: 0,
        lastNum: 0,
        chars: '',//关键字
        searchResult: [],
        preAllNum: 0,
        isSearched: false
        // authorSelect:false,//名家选择状态
      }
    },
    created() {
      this.loadAuthorList();
      // this.search();
    },
    activated(){
      // this.resetStatus();
      // console.log(this.$route.path);
    },
    methods: {
      // 重置搜索页
      resetStatus(){
        this.isSearched = false;
        this.chars = ''
        this.searchResult = [];
        this.loadAuthorList();
      },
      goBack(){
        window.history.back(-1)
      },
      toggleAuthorList(status) {
        console.log(status);
        if(status){
          $('#authorList').animate({'width':0,'left':this.containerWidth*540/2144+'px'},500);
          return;
        }
        if(parseInt($('#authorList').css('width'))==0){
	        $('#authorList').animate({
	        	'width':this.containerWidth*540/2144+'px',
	        	'left':0
	        },500);
        }else{
	        $('#authorList').animate({'width':0,'left':this.containerWidth*540/2144+'px'},500);
        }
      },
      loadAuthorList() {
        let url = common.apidomain + 'api/stamp/listCarvingMaster';
        let formData = new FormData();
        formData.append('page', 1);
        formData.append('size', 1000);
        ajax(url, 'post', formData, (res) => {

          if (res.data.code !== 200) {
            Toast(res.data.msg);
            return;
          }
          this.authorList = res.data.data;
        });
      },
      // 选择名家
      selectAuthor(e) {
        if (this.authorId == e.target.dataset.sousuo) {
          this.authorId = -1;
        } else {
          this.authorId = e.target.dataset.sousuo;
        }
      },
      nextSearch() {
        this.search(this.allNum, this.lastNum);
      },
      prevSearch() {
        console.log(this.preAllNum)
        if (this.preAllNum < 0) {
          this.preAllNum = 0;
          // this.isSearched = false;
          Toast('无更多内容');
          return;
        }
        this.search(this.preAllNum, this.lastNum);
      },
      search(allNum, lastNum) {
        console.log(allNum,lastNum)
        this.isDisabled = false;
        this.isShow = false;
        var url = common.apidomain + 'api/stamp/stampsQuery';
        var allNum = (allNum - 0) || 0;
        var lastNum = (lastNum - 0) || 0;
        var formData = new FormData();
        formData.append('chars', this.chars)
        formData.append('size', 6)
        formData.append('allNum', allNum)
        formData.append('lastNum', lastNum)

        // 未选择名家、已输入搜索关键字
        if (this.authorId == -1 && this.chars.trim() !== '') {
          // 重置列表
          this.searchResult = [];

          ajax(url, 'post', formData, (res) => {
            if (res.data.code !== 200) {
              Toast('获取名家列表失败');
              return;
            }
            //未请求到数据
            if (res.data.data.stampList.length == 0) {
              this.isSearched = false;
              Toast('无更多内容');
              return;
            }
            this.isSearched = true;
            //  // 设置最新的allNum（用于翻页）
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
          // var url = common.apidomain + 'api/stamp/stampsQuery';
          // var data = {
          // 	logiciansId:this.authorId,
          // 	chars:this.chars,
          // 	allNum:this.allNum,
          // 	lastNum:this.lastNum,
          // 	size:6
          // };
          // let formData = new FormData();
          formData.append('logiciansId', this.authorId);
          ajax(url, 'post', formData, (res) => {
            if (res.data.code != 200) {
              Toast(res.data.msg);
              return;
            }
            //未请求到数据
            if (res.data.data.stampList.length == 0) {
              Toast('无更多内容');
              return;
            }
            this.isSearched = true;
            this.searchResult = res.data.data;
            this.allNum = res.data.data.allNum;
            this.lastNum = res.data.data.stampList.length;
            this.preAllNum = res.data.data.preAllNum;
            this.authorId = res.data.data.logiciansId;
            // this.searched: true
          });
        }
        // 选择名家、未选择文字
        if (this.authorId !== -1 && this.chars.trim() == '') {
          this.$router.push({path: '/author/' + this.authorId});
        }
        this.toggleAuthorList(true);
      }
    },
    transitions: {
      'show': {
        enterClass: "fadeInRight",
        leaveClass: "fadeOutRight"
      }
    },
    computed: {
      containerWidth: function () {
        return window.innerWidth;
      }
    },
    watch:{
      $route(newValue,oldValue) {
        // console.log(newValue.path);
        // console.log(oldValue.path);
        if(newValue.path=='/search'&&oldValue.path=='/'){
            console.log(1);
        }
      }
    }
  }

</script>
<style scoped>
    .container {
        box-sizing: border-box;
    }

    .search {
        /*background-color: pink;*/
        background: url('../../../static/images/search-bg.png') center center no-repeat;

    }

    .search .left {
        /*width:.75rem;*/
        /*height:1rem;*/
        background: url('../../../static/images/result-left-bg.png') center center no-repeat;
    }

    .search .right {
        text-align: center;
        background: url('../../../static/images/search-box.png') center center no-repeat;
    }

    /*中间*/
    .search .center {
        position: relative;
    }

    .search .center.searched {
        background: url('../../../static/images/search-bg2.png') center center no-repeat;
    }

    textarea {
        padding-top: .2rem;
    }

    button {
        color: transparent;
    }

    /*名家列表*/
    .searchbtn {
        background: url('../../../static/images/search-btn.png') center center no-repeat;
        cursor: pointer;
    }

    /*搜索按钮*/
    .authorlist {
        background: url('../../../static/images/author.png') center center no-repeat;
        cursor: pointer;
    }

    /*名家列表*/
    .outer-box {
        background-color: #baa99a;
        position: absolute;
        /*left: 0;*/
        overflow: hidden;
    }

    .author-list {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        overflow-y: scroll;
        box-sizing: border-box;
    }

    /* for Chrome */
    .author-list::-webkit-scrollbar {
        display: none;
    }

    .author-item {
        box-sizing: border-box;
        padding-top: .2rem;
        font-size: .3rem;
        font-family: 'FangSong_GB2312';
        border: 1px solid #fff;
        margin-right: -1px;
        margin-top: -1px;
        cursor: pointer;
        color: #fff;
    }

    .author-item.active {
        color: #a38e70;
        background-color: #fff;
    }

    .search-result {
        /*background-color: rgba(0,0,0,.4);*/
    }

    .search-result .inner-box {
        background-color: rgba(0, 0, 0, .4);
    }

    .search-result > ul {
        height: 100%;
    }

    .stamp-item {
        width: 33%;
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

        position:relative;
        /*line-height:1.4em;*/
        /* 3 times the line-height to show 3 lines */
        height:112px;
        overflow:hidden;
    }
    .stamp-item p::after {
        content:"...";
        font-weight:bold;
        position:absolute;
        bottom:0;
        right:0;
        padding:0 20px 1px 45px;
    }

    .input-area {
        color: #a38e70;
        font-family: 'FangSong_GB2312';
    }

    .home-btn {
        background: url('../../../static/images/home-btn.png') no-repeat center center;
        position: absolute;
        z-index: 99999;
        /*left: 0;*/
    }
</style>

