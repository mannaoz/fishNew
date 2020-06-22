<template>
  <div class="newslist">
    <div class="newslist-tab">
      <ul>
        <li v-for="(item,key) in newslist.slice(0,1)" :key="key" >
          <router-link :to="item.link" exact tag="div">{{item.name}}</router-link>
        </li>
        <li v-for="(item,key) in newslist.slice(1)" :key="key+1" >
          <router-link :to="item.link" tag="div">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="newslist-body">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newslist: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.newslist-tab {
  height: 38px;
  // background-color: cadetblue;
  position: relative;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  width: 96vw;
  padding: 0 2vw;
  ul {
    display: flex;
    overflow: auto;
    li {
      line-height: 38px;
      padding: 0 5px;
      font-size: 17px;
      min-width: 40px;
      color: #4f4f4f;
      .active{
        color: rgb(50, 50, 50);
        font-size: 20px;
        font-weight: 600;
      transition: all 0.25s;
      }
    }
    // 设置谷歌浏览器的滚动条不显示
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>