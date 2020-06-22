<template>
  <transition name="movelogin">
    <div class="txlogin">
      <div class="txlogin-header">
        <b></b>
        <span @click="back">返回</span>
      </div>
      <div class="txlogin-body">
        <h1>登陆账号</h1>
        <h2>用于来验证你个人的信息</h2>
        <input type="text" placeholder="账号" v-model="txuser.name" />
        <input type="text" placeholder="密码" v-model="txuser.paw" />
        <button @click="Txreg">登陆</button>
      </div>
    </div>
  </transition>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data: () => ({
    txuser: {
      name: null,
      paw: null
    }
  }),
  methods: {
      ...mapMutations(['settxuser']),
    Txreg() {
      if (this.txuser.name&&this.txuser.paw) {
        if (this.txuser.name.length > 3 && this.txuser.paw.length > 3) {
          sessionStorage.setItem("txuser", JSON.stringify(this.txuser));
          this.$router.push({ name: "person" });
          this.settxuser(this.txuser);
        } else {
          alert("输入信息错误");
        }
      }else{
          alert('请输入账号和密码')
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss">
.txlogin {
  height: 100vh;
  width: 96vw;
  padding: 0 2vw;
  position: absolute;
  background-color: white;
  z-index: 500;
  .txlogin-header {
    height: 35px;
    line-height: 35px;
    text-align: left;
    b {
      display: inline-block;
      height: 35px;
      width: 20px;
      background-position: center center;
      background-size: 100% 60%;
      background-repeat: no-repeat;
      background-image: url("../assets/img/icon-arrow-left.png");
    }
    span {
      display: inline-block;
      height: 35px;
      width: 60px;
      line-height: 35px;
      vertical-align: top;
      font-size: 19px;
      font-weight: 600;
      color: rgb(138, 138, 138);
    }
  }
  .txlogin-body {
    margin-top: 50px;
    h1 {
      font-size: 28px;
      text-align: left;
      width: 68vw;
      margin: 0 auto;
      line-height: 35px;
      color: rgb(74, 74, 74);
      font-weight: 600;
    }
    h2 {
      font-size: 14px;
      text-align: left;
      width: 68vw;
      margin: 0 auto;
      line-height: 30px;
      color: rgb(162, 162, 162);
      padding-bottom: 10px;
    }
    input {
      width: 68vw;
      padding: 0;
      border: none;
      outline: none;
      line-height: 40px;
      border-bottom: 1px solid rgb(84, 84, 84);
      font-size: 19px;
    }
    button {
      display: block;
      border: none;
      outline: none;
      width: 68vw;
      line-height: 35px;
      margin: 20px auto;
      border-radius: 8px;
      font-size: 16px;
      color: white;
      background-color: rgb(7, 196, 249);
    }
  }
}
/* 搜索界面移动画 */
/* 进入和离开的动画时间 */
/* 进去的时候 */
.movelogin-enter {
  opacity: 0;
}
.movelogin-enter-active,
.movelogin-leave-active {
  transition: all 0.2s linear;
}
/* 离开时候 */
.movelogin-leave-to {
  opacity: 0;
}
</style>