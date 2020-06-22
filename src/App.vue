<template>
  <div id="app">
    <TxSearch class="txsearch-view" v-show="TxSearchViewshow"></TxSearch>
    <TxContent class="txcontent-view" v-show="TxContentViewshow"></TxContent>
    <keep-alive >
      <router-view v-show="!TxContentViewshow"></router-view>
    </keep-alive>
    <div class="tabbar">
      <router-link tag="div" to="/txnews" exact>新闻</router-link>
      <router-link tag="div" to="/txvideo">美图</router-link>
      <router-link tag="div" to="/txperson">个人</router-link>
    </div>
  </div>
</template>

<script>
// 搜索页面引入
import TxSearch from "./views/TxSearch";
import TxContent from "./views/TxContent";

// vuex的数据引入
import { mapState,mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["TxSearchViewshow", "TxContentViewshow",'pinlun'])
  },
  components: {
    TxSearch,
    TxContent
  },
  mounted() {
    this.$store.dispatch("setList");
    if(sessionStorage.getItem("txuser")){
      this.settxuser(JSON.parse(sessionStorage.getItem("txuser")))
    }
    // console.log(JSON.parse(sessionStorage.getItem("txuser")));
    if(JSON.parse(sessionStorage.getItem("pinlun"))){
      this.setbdpinlun(sessionStorage.getItem("pinlun"))
    }
    // console.log(this.pinlun)
  },
  methods: {
    ...mapMutations(['settxuser','setbdpinlun'])
  },
};
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
#app::-webkit-scrollbar {
  width: 0px;
}
.txsearch-view ,.txcontent-view{
  top: 0;
  left: 0;
  position: absolute;
  z-index: 100;
}

.tabbar {
  display: flex;
  background-color: white;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #7e7e7e;
  position: fixed;
  z-index: -1;
  width: 100vw;
  bottom: 0;
  border-top: 1px solid #e5e5e5;
  z-index: 80;
  div {
    flex: 1;
    text-align: center;
    i {
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 20px;
      width: 20px;
    }
  }
  .active {
    color: #82d1fe;
  }
}
</style>
