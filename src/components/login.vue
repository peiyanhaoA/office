<template>
  <div id="main">
      <div id="login" v-if="isShow">
          <div id="log">
              <input type="text" placeholder="用户名">
              <input type="text" placeholder="密码">
              <input type="button" value="登录" v-on:click="login">
          </div>
          <div id="code">
              <img src="../assets/code.jpg" alt="正在加载..." srcset="">
          </div>
      </div>
    <router-view v-if="isTrue"></router-view>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isShow: true,
      isTrue: false
    }
  },
  methods: {
    login: function () {
      this.isShow = false
      this.isTrue = true
      this.$router.replace('/home')
    }
  }
}
</script>

<style>
    #main{
        width: 100%;
        height: 100%;
    }
    #login{
        width: 450px;
        height: 300px;
       background-color: skyblue;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       margin: auto;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
    }
    #log{
        width: 170px;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px 40px 20px 0;
        border-right: 1px solid #000;
    }
    #log>input{
        width: 100%;
        height: 25px;
        font-size: 16px;
    }
    #code{
        margin-left: 40px;
    }
    #code>img{
        width: 150px;
    }
</style>


