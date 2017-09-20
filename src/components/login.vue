<template>
    <div id="main">
        <div id="login" v-if="isShow">
            <div id="log">
                <p v-model="caveat" v-text="caveat"></p>
                <input type="text" class="ipt" placeholder="用户名" id="userName" v-on:blur="getVal(username)" v-model:value="username">
                <input type="password" class="ipt" placeholder="密码" id="pwd" v-model:value="pwd" @blur="getpwd(pwd)">
                <input type="button" class="btn btn-primary btn-lg" value="登　录" v-on:click="login" v-bind:disabled="disabled">
            </div>
            <div id="code">
                <img src="../assets/code.jpg" alt="正在加载..." srcset="">
                <p class="text">扫码登录</p>
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
      isTrue: false,
      username: '',
      pwd: '',
      caveat: '',
      disabled: true
    }
  },
  methods: {
    login: function () {
      this.isShow = false
      this.isTrue = true
      this.$router.replace('/home')
    },
    getVal: function (val) {
      if (val === '') {
        this.caveat = '用户名不能为空'
      } else {
        this.caveat = ''
      }
    },
    getpwd: function (val) {
      if (val === '') {
        this.caveat = '密码不能为空'
      } else {
        this.caveat = ''
      }
    }
  },
  watch: {
    username: function (val) {
      if (val === '') {
        this.caveat = '用户名不能为空'
      } else {
        this.caveat = ''
      }
      if (this.username === '' || this.pwd === '') {
        this.disabled = true
      } else {
        this.disabled = false
      }
    },
    pwd: function (val) {
      if (val === '') {
        this.caveat = '密码不能为空'
      } else {
        this.caveat = ''
      }
      if (this.username === '' || this.pwd === '') {
        this.disabled = true
      } else {
        this.disabled = false
      }
    }
  }
}
</script>

<style scoped>
@import '../libs/bootstrap/css/bootstrap.css';
    #main{
        width: 100%;
        height: 100%;
    }
    #login{
        width: 50%;
        height: 60%;
       background-color: skyblue;
       display: flex;
       justify-content: space-around;
       align-items: center;
       position: absolute;
       margin: auto;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
    }
    #log{
        width: 50%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px 40px 20px;
        border-right: 1px solid #000;
        position: relative;
    }
    #log>p{
        width: 100%;
        height: 16px;
        font-size: 12px;
        color: red;
        position: absolute;
        top: 0;
        left: 0;
    }
    .ipt{
        width: 100%;
        height: 30px;
        font-size: 18px;
        padding: 4px;
    }
    .btn{
        width: 100%;
        height: 40px;
    }
    #code{
        width: 30%;
        height: 70%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }
    #code>img{
        width: 100%;
    }
    .text{
      font-size: 18px;
    }
</style>


