<template>
  <div class="txvideo-view">
    <div class="txvideo-header">
      <p>每天一图</p>
    </div>
    <ul v-if="HotList">
        <li v-for="(item,key) in HotList" :key="key" @click="changeTxContentViewShow(item)">
            <img :src="item.imgsrc" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";
export default {
  computed: {
    ...mapState(["videolist",'HotList'])
  },
  methods: {
    test() {
      console.log(this.videolist);
    },
    ...mapMutations(['changeTxContentViewShow'])
  }
};
</script>

<style lang="scss">
.txvideo-view {
  .txvideo-header{
    height: 35px;
    font-size: rgb(74, 74, 74);
    line-height: 35px;
    font-size: 20px;
    font-weight: 600;
    position: fixed;
    width: 100vw;
    background-color: white;
    top: 0;
  }
  ul {
    margin-top: 35px;
    li {
      img {
        width: 96vw;
      }
    }
  }
}

</style>