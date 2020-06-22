<template>
  <transition name="movecontent">
    <div class="txcontent-view">
      <div class="txcontent-top">
        <span @click="changeTxContentViewShowA"></span>
        <span></span>
      </div>
      <div class="txcontent-body" v-if="TxContentView">
        <h1>{{TxContentView.title}}</h1>
        <h2>
          <span>{{TxContentView.source}}&nbsp;&nbsp;&nbsp;{{TxContentView.mtime}}发布</span>
        </h2>
        <p>最近发生很多事，肯定会有很多小伙伴疑惑。是怎么回事呢？{{TxContentView.title}}相信大家都很熟悉，但是aabbb是怎么回事呢，下面就让小编带大家一起了解吧。</p>
        <img :src="TxContentView.imgsrc" alt />
        <p>
          {{TxContentView.title}}，其实就{{TxContentView.title}}，大家可能会很惊讶{{TxContentView.title}}怎么会这样呢？但事实就是这样，小编也感到非常惊讶。
          这就是关于{{TxContentView.title}}的事情了，大家有什么想法呢
        </p>
        <img :src="imgacg.img" alt />
        <p>扶起社会责任不仅仅是一个重大的事件，还可能会改变我的人生。 问题的关键究竟为何？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 那么， 了解清楚扶起社会责任到底是一种怎么样的存在，是解决一切问题的关键。 希腊说过一句富有哲理的话，最困难的事情就是认识自己。我希望诸位也能好好地体会这句话。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。</p>
      </div>
      <div class="txcontent-pinlun" v-if="TxContentView">
        <h1>评论栏</h1>
        <div class="txcontent-pinlun-one" v-if="!pinlun[TxContentView.title]">
          <h2>暂无评论，请迟点来看吧</h2>
        </div>
        <div class="txcontent-pinlun-two" v-if="pinlun[TxContentView.title]">
          <ul>
            <li v-for="(item,key) in pinlun[TxContentView.title]" :key="key">
              <div class="left">
                <span></span>
              </div>
              <div class="right">
                <p>{{item.person}}</p>
                <h2>{{item.txt}}</h2>
                <h3>{{item.date|datepl}}发布</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="txcontent-bottom">
        <input type="text" v-model="text" placeholder="写下你的评论吧"/>
        <button @click="textinp">提交</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    text: null
  }),
  methods: {
    changeTxContentViewShowA() {
      this.$forceUpdate();
      this.changeTxContentViewShow();
    },
    textinp() {
      this.setpinlun({ title: this.TxContentView, conent: this.text });
      this.text = null;
    },
    ...mapMutations(["changeTxContentViewShow", "setpinlun"])
  },
  computed: {
    ...mapState(["TxContentView", "imgacg", "TxContentViewshow", "pinlun"])
  },
  mounted() {
    // console.log(this.TxContentView);
    // location.reload();
  },
  filters: {
    datepl(val) {
      return val.slice(11,25)
    }
  }
};
</script>

<style lang="scss">
.txcontent-view {
  width: 96vw;
  height: 100vh;
  padding: 0 2vw;
  background-color: white;
  z-index: 500;
  overflow: auto;
  top: 0;
  left: 0;
  .txcontent-top {
    display: flex;
    position: fixed;
    height: 40px;
    width: 98vw;
    background-color: white;
    span:nth-child(1) {
      position: absolute;
      display: inline-block;
      height: 40px;
      left: 0;
      width: 40px;
      background-image: url("../assets/img/icon-arrow-left.png");
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 55% 55%;
    }
    span:nth-child(2) {
      position: absolute;
      right: 0;
      display: inline-block;
      height: 40px;
      width: 40px;
      background-image: url("../assets/img/news-tabbar-logo.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 60% 60%;
    }
  }
  .txcontent-body {
    min-height: 900px;
    // background-color: yellow;
    padding-bottom: 30px;
    h1 {
      line-height: 25px;
      font-size: 24px;
      text-align: left;
      text-overflow: ellipsis;
      height: 50px;
      overflow: hidden;
      margin-top: 55px;
    }
    h2 {
      height: 48px;
      line-height: 48px;
      font-size: 13px;
      color: rgb(155, 155, 155);
      text-align: left;
      padding-left: 18px;
    }
    img {
      width: 96vw;
    }
    p {
      line-height: 30px;
      color: rgb(93, 93, 93);
      font-size: 18px;
      text-align: left;
      text-indent: 25px;
    }
  }
  .txcontent-bottom {
    display: flex;
    position: fixed;
    height: 40px;
    width: 98vw;
    background-color: white;
    // z-index: 200;
    bottom: 0;
    padding-top: 5px;
    input{
      width: 60%;
      height: 35px;
      outline: 0;
      border: 0;
      border-radius: 5px;
      padding: 0;
      padding-left: 20px;
      margin-left: 50px;
      border: 1px solid rgb(175, 175, 175);
    }
    button{
      height: 35px;
      padding: 0;
      width: 70px;
      border: 0;
      border-radius: 5px;
      background-color: rgb(193, 191, 191);
      color: white;
      outline: none;
    }
  }
  .txcontent-pinlun {
    padding-bottom: 50px;
    min-height: 120px;
    h1 {
      font-size: 20px;
      line-height: 30px;
      text-align: left;
      border-bottom: 1px solid rgb(202, 202, 202);
    }
    .txcontent-pinlun-one {
      line-height: 90px;
    }
    .txcontent-pinlun-two{
      ul{
        li{
          display: flex;
          .left{
            width: 10vw;
            position: relative;
            span{
              display: inline-block;
              border-radius: 50%;
              background:url('../assets/img/person-tabbar-logo.png');
              background-size: 100% 100%;
              background-position: center center;
              background-repeat: no-repeat;
              width: 30px;
              height: 30px;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
            }
          }
          .right{
            width: 86vw;
            p{
              font-size: 14px;
              text-align: left;
              line-height: 25px;
              color:rgb(253, 45, 80);
            }
            h2{
                font-size: 21px;
                text-align: left;
            }
            h3{
              font-size: 11px;
              text-align: right;
              line-height: 20px;
            }
          }
          border-bottom: 1px solid rgb(193, 193, 193);
        }
      }
    }
  }
}
div::-webkit-scrollbar {
  width: 0px;
}

/* 搜索界面移动画 */
/* 进入和离开的动画时间 */
/* 进去的时候 */
.movecontent-enter {
  opacity: 0;
}
.movecontent-enter-active,
.movecontent-leave-active {
  transition: all 0.2s linear;
}
/* 离开时候 */
.movecontent-leave-to {
  opacity: 0;
}
</style>
