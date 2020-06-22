<template>
  <div class="txperson">
    <div class="txperson-top">
      <h1>个人页面</h1>
    </div>
    <div class="txperson-header">
      <span></span>
      <p>{{txuser.name}}</p>
    </div>
    <div class="txperson-header-body">
      <ul>
        <li :class="{'active':isactive}" @click="changeShow(true)">评论</li>
        <li :class="{'active':!isactive}" @click="changeShow(false)">收藏</li>
      </ul>
      <div class="left" v-show="isactive">
        <div v-if="showpinlun">
          <p v-for="(item,key) in showpinlun" :key="key">时间:{{item.date.slice(15,22)}}<span>内容：{{item.txt}}</span></p>
        </div>
        <div v-if="!showpinlun">
          <p>暂无评论</p>
        </div>
      </div>
      <div class="right" v-show="!isactive">
        <p>暂时没有收藏</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    isactive: true
  }),
  computed: {
    ...mapState(["txuser", "pinlun"]),
    showpinlun() {
      let arr =[];
      if (this.pinlun) {
        for (var i in this.pinlun) {
          for (var k = 0; k < this.pinlun[i].length; k++) {
            if (this.pinlun[i][k].person == this.txuser.name) {
              arr.push(this.pinlun[i][k]);
            }
          }
        }
        return arr
      }else{
        return false
      }
    }
  },
  methods: {
    changeShow(val) {
      this.isactive = val;
    }
  },
  mounted() {
    console.log(this.showpinlun)
  }
};
</script>

<style lang="scss">
.txperson {
  width: 96vw;
  height: 100vh;
  padding: 0 2vw;
  .txperson-top {
    height: 40px;
    border-bottom: 1px solid rgb(138, 138, 138);
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(144, 144, 144);
  }
  .txperson-header {
    padding-top: 40px;
    span {
      display: inline-block;
      width: 100px;
      height: 100px;
      background-image: url("../assets/img/person-tabbar-logo.png");
      background-position: center center;
      background-size: 100%;
    }
    p {
      line-height: 30px;
      color: rgb(255, 92, 92);
      font-size: 19px;
      font-weight: 600;
    }
  }
  .txperson-header-body {
    ul {
      width: 96vw;
      display: flex;
      li {
        width: 50%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        font-weight: 600;
        color: rgb(160, 160, 160);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
      .active {
        background-color: white;
        color: #82d1fe;
      }
    }
    .left{
      p{
        text-align: left;
        line-height: 35px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 80%;
          padding-left: 70px;
          i{
            display: inline-block;
            vertical-align: top;
          }
      }
    }
  }
}
</style>