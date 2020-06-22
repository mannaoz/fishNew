<template>
  <transition name="movesearch">
    <div class="search-view">
      <div class="search-view-top">
        <div class="search-view-top-input">
          <span></span>
          <input type="text" placeholder="请输入搜索内容" v-model="txt" />
        </div>
        <span class="search-cancel" @click="changeTxSearchViewShow()">取消</span>
      </div>
      <div class="search-view-view" v-show="inputShow">
        <div class="search-view-todayhot">
          <div class="search-view-todayhot-title">
            <span>今日热搜</span>
            <span>
              更多热搜
              <i class="icon-keyboard_arrow_right"></i>
            </span>
          </div>
          <ul class="search-view-todayhot-view" v-if="HotList">
            <li v-for="(item,key) in HotList.slice(0,6)" :key="key" @click="changeTxContentViewShow(item)">
              <span v-if="key==1||key==2||key==5">热</span>
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="search-view-topnews">
          <div class="search-view-topnews-title">
            <span>话题榜</span>
          </div>
          <ul class="search-view-topnews-view" v-if="NewsList">
            <li v-for="(item,key) in NewsList.slice(0,10)" :key="key" @click="changeTxContentViewShow(item)">
              <span>{{key+1}}</span>
              <p>{{item.ltitle}}</p>
              <i v-if="item.votecount!=0">{{item.votecount}}</i>
            </li>
          </ul>
        </div>
        <div class="search-view-exclusive">
          <div class="search-view-exclusive-title">
            <span>独家</span>
          </div>
          <ul class="search-view-exclusive-view" v-if="NewsList">
            <li @click="changeTxContentViewShow(NewsList[random40])">
              <img :src="NewsList[random40].imgsrc" alt />
              <p>{{NewsList[random40].title}}</p>
              <span>{{NewsList[random40].source}}</span>
            </li>
            <li @click="changeTxContentViewShow(NewsList[random40+1])">
              <img :src="NewsList[random40+1].imgsrc" alt />
              <p>{{NewsList[random40+1].title}}</p>
              <span>{{NewsList[random40+1].source}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="search-filter" v-show="!inputShow">
        <div v-for="(item,key) in fiterArr" :key="key">
          <span></span>
          <p v-html="item.name" @click="changeTxContentViewShow(item.shuju)"></p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    txt: null
  }),
  methods: {
    show(val){
      console.log(val)
    },
    ...mapMutations(["changeTxSearchViewShow",'changeTxContentViewShow'])
  },
  mounted() {
    // console.log(this.HotList);
  },
  computed: {
    inputShow() {
      if (this.txt) {
        return false;
      } else {
        return true;
      }
    },
    fiterArr() {
      if (this.NewsList) {
        let newsarr = this.NewsList;
        let txt = this.txt;
        let arr = [];
        for (let i = 0; i < newsarr.length; i++) {
          if (newsarr[i].title.indexOf(txt) > -1) {
            let newtxt = {};
            newtxt.name = newsarr[i].title.replace(
              new RegExp(txt, "g"),
              "<b>" + txt + "</b>"
            );
            newtxt.shuju=newsarr[i]
            newtxt.key = i;
            arr.push(newtxt);
          }
        }
        return arr;
      } else {
        let arr = [];
        return arr;
      }
    },
    random40() {
      return Math.floor(Math.random() * 40) + 1;
    },
    ...mapState(["TxSearchViewshow", "HotList", "NewsList"])
  }
};
</script>

<style lang="scss">
.search-view {
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;
  // position: relative;
  overflow: auto;
  z-index: 100;
  top: 0;
  left: 0;
  .search-view-top {
    display: flex;
    height: 38px;
    width: 100vw;
    position: fixed;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    padding-left: 6%;
    border-bottom: 1px solid #e5e5e5;
    .search-view-top-input {
      height: 38px;
      width: 74%;
      overflow: hidden;
      border-radius: 8px;
      background-color: #f7f7f7;
      ::-webkit-input-placeholder {
        color: #aaaaaa;
      }
      span:nth-child(1) {
        display: inline-block;
        height: 38px;
        width: 38px;
        background-image: url("../assets/img/header-search-logo.png");
        background-size: 50% 50%;
        background-position: center center;
        background-repeat: no-repeat;
      }
      input {
        height: 38px;
        vertical-align: top;
        border: 0;
        outline: none;
        color: #aaaaaa;
        font-size: 16px;
        background-color: #f7f7f7;
      }
    }
    .search-cancel {
      width: 18%;
      text-align: center;
      line-height: 38px;
      font-size: 18px;
      color: #4a4a4a;
    }
  }
  .search-view-todayhot {
    margin-top: 49px;
    .search-view-todayhot-title {
      line-height: 40px;
      height: 40px;
      padding: 0 6%;
      display: flex;
      justify-content: space-between;
      span:nth-child(1) {
        font-size: 18px;
        font-weight: 600;
      }
      span:nth-child(2) {
        font-size: 16px;
        font-weight: 400;
        i {
          line-height: 40px;
          vertical-align: top;
        }
      }
    }
    .search-view-todayhot-view {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-left: 6%;
        width: 32%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        border-radius: 12px;
        padding: 0 10px;
        background-color: #f7f7f7;
        margin-bottom: 8px;
        color: #545454;
        span {
          display: inline-block;
          height: 15px;
          width: 15px;
          background-color: rgb(255, 73, 73);
          color: white;
          font-size: 12px;
          text-align: center;
          line-height: 14px;
          margin-top: 7px;
        }
      }
    }
  }
  .search-view-topnews {
    margin-top: 10px;
    padding: 0 6%;
    .search-view-topnews-title {
      line-height: 40px;
      font-size: 17px;
      color: #4c4c4c;
      font-weight: 600;
    }
    .search-view-topnews-view {
      li {
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          height: 30px;
          vertical-align: top;
          width: 35px;
          text-align: center;
          font-size: 18px;
          color: #fdbe35;
        }
        p {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 70%;
          height: 30px;
          line-height: 30px;
        }
        i {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          vertical-align: top;
          font-size: 12px;
          color: #5d5d5d;
        }
      }
      li:nth-child(1),
      li:nth-child(2),
      li:nth-child(3) {
        span {
          color: rgb(255, 73, 73);
        }
      }
    }
  }
  .search-view-exclusive {
    padding: 0 4%;
    .search-view-exclusive-title {
      span {
        line-height: 40px;
        font-size: 17px;
        font-weight: 600;
        color: #4c4c4c;
      }
    }
    .search-view-exclusive-view {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-around;
      li {
        width: 46%;
        height: 90px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          z-index: -1;
          filter: blur(2px);
        }
        p {
          color: white;
          font-size: 14px;
          width: 120px;
          line-height: 50px;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        span {
          display: inline-block;
          color: rgb(238, 238, 238);
          font-size: 12px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
}
div::-webkit-scrollbar {
  width: 0px;
}

.search-filter {
  margin-top: 49px;
  width: 96vw;
  padding: 0 2vw;
  div {
    border-bottom: 1px solid #e9e9e9;
    span {
      display: inline-block;
      height: 30px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 15px 15px;
      width: 30px;
      background-image: url("../assets/img/header-search-logo.png");
    }
    p {
      height: 30px;
      display: inline-block;
      width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 30px;
      font-size: 13px;
      text-align: left;
      b {
        color: rgb(23, 114, 241);
        font-weight: 600;
      }
    }
  }
}

/* 搜索界面移动画 */
/* 进入和离开的动画时间 */
/* 进去的时候 */
.movesearch-enter {
  transform: translateX(-100%);
}
.movesearch-enter-active,
.movesearch-leave-active {
  transition: all 0.3s linear;
}
/* 离开时候 */
.movesearch-leave-to {
  transform: translateX(-100%);
}
</style>