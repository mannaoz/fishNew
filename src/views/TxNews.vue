<template>
  <div class="news-view">
    <div class="news-header">
      <span class="news-header-left"></span>
      <p class="news-header-center" @click="changeTxSearchViewShow">
        <i></i>
        <b>
          <transition-group mode="out-in" name="movefont" tag="ul">
            <li v-for="(item,key) in NewsList" :key="key" v-show="index==key" >{{item.title}}</li>
          </transition-group>
        </b>
      </p>
      <span class="news-header-right"></span>
    </div>
    <div class="news-body">
      <newslisttab :newslist='oneList'/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import newslisttab from '../components/NewsListTab'

export default {
  data: () => ({
    index: 0
  }),
  components:{
    newslisttab
  },
  methods: {
    ...mapMutations(["changeTxSearchViewShow",'changeTxContentViewShow'])
  },
  computed: {
    ...mapState(["TxSearchViewshow", "NewsList",'oneList'])
  },
  mounted() {
    //获取
    // 计时器判断
    this.timer = setInterval(() => {
      if (this.index < this.NewsList.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    }, 1500);
  },
  beforeDestroy () {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss">
.news-view {
  height: 100vh;
  background-color: white;
  .news-header {
    height: 42px;
    // background-color: yellow;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    left: 0;
    top: 2px;
    span {
      display: inline-block;
      width: 42px;
      height: 42px;
    }
    .news-header-left {
      background-image: url("../assets/img/news-logo-128.png");
      background-size: 80% 80%;
      background-position: 0 center;
      background-repeat: no-repeat;
    }
    .news-header-right {
      background-image: url("../assets/img/listen-logo-128.png");
      background-size: 65% 65%;
      background-position: 80% center;
      background-repeat: no-repeat;
    }
    .news-header-center {
      margin-top: 2px;
      height: 38px;
      width: 80%;
      background-color: #f7f7f7;
      border-radius: 8px;
      position: relative;
      i {
        display: inline-block;
        height: 38px;
        width: 38px;
        position: absolute;
        left: 0px;
        background-image: url("../assets/img/header-search-logo.png");
        background-size: 50% 50%;
        background-position: center center;
        background-repeat: no-repeat;
      }
      b {
        display: inline-block;
        height: 30px;
        width: 200px;
        margin-left: 10px;
        overflow: hidden;
        position: relative;
        margin-top: 4px;
        ul {
          li {
            height: 30px;
            width: 200px;
            text-overflow: ellipsis;
            position: absolute;
            white-space: nowrap;
            overflow: hidden;
            line-height: 30px;
            color: #7e7e7e;
          }
        }
      }
    }
  }
}
.news-body{
  position: fixed;
  top: 45px;
}
/* 搜索栏位移动画 */
/* 进入和离开的动画时间 */
.movefont-enter-active,
.movefont-leave-active {
  transition: all 1s linear;
}
/* 离开时候 */
.movefont-leave-to {
  transform: translateY(-100%);
}
/* 进去的时候 */
.movefont-enter {
  transform: translateY(100%);
}
</style>