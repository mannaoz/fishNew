<template>
  <div class="yaowen-view">
    <div class="yaowen-list">
      <ul>
        <li v-for="(item,key) in NewsList" :key="key" class="item" @click="changeTxContentViewShow(item)">
          <div class="left">
            <p>{{item.title}}</p>
            <h1>
              <span>{{item.source}}</span>
              <i>{{item.ptime|fabuTime}}发布</i>
            </h1>
          </div>
          <div class="right">
            <img :src="item.imgsrc" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["NewsList"])
  },
  mounted() {
    // console.log(this.NewsList);
    
  },
  filters: {
    fabuTime(val){
      return val.slice(6)
    }
  },
  methods: {
    ...mapMutations(['changeTxContentViewShow'])
  },
};
</script>

<style lang="scss">
$liheight: 80px;
.yaowen-view {
  width: 96vw;
  padding: 0 2vw;
  .yaowen-list {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0px;
    }
    height: $liheight * 7.8;
    ul {
      .item{
                height: $liheight;
                margin: 10px 0px;
                display: flex;
                border-bottom: 1px solid #c4c4c4;
                padding-bottom: 10px;
                .left{
                    width: 60%;
                position: relative;
                margin-right:15px ;
                    p{
                        font-size: 18px;
                        line-height: 20px;
                        color: rgb(52, 52, 52);
                    }
                    h1{
                        bottom: 0;
                        width: 100%;
                        position:absolute;
                        bottom: 0;
                        display: flex;
                        justify-content: space-between;
                        span{
                            line-height: 16px;
                            font-size: 12px;
                            color: rgb(145, 145, 145);
                        }
                        i{
                            display: inline-block;
                            font-size: 12px;
                            line-height: 16px;
                            color: rgb(145, 145, 145);
                        }
                    }
                }
                .right{
                    width: 40%;
                    overflow: hidden;
                    border-radius: 8px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
    }
  }
}
</style>