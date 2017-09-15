<template>
<div id="home">
  <div id="homeLeft">
      <div id="search">
          <input type="text" v-on:keyup.13="search($event)">
          <span class="iconfont" @click="search">&#xe620;</span>
      </div>
      <ul>
          <li v-for="city in citys">
              <router-link :to="'/' + city.to">{{ city.name }}</router-link>
          </li>
      </ul>
  </div>
  <router-view id="homeRight"></router-view>
  </div>
</template>
<script scoped>

export default {
  name: 'home',
  data () {
    return {
      citys: [
        {name: '北京', to: 'home/beijing'},
        {name: '南京', to: 'home/nanjing'},
        {name: '上海', to: 'home/shanghai'},
        {name: '乌镇', to: 'home/wuzhen'}
      ]
    }
  },
  methods: {
    search: function ($event) {
      console.log($event.keyCode)
    }
  }
}
</script>
<style>
@import '../libs/iconfont/iconfont.css';
#home{
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: rgb(244,244,244);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#homeLeft{
  width: 200px;
  height: 90%;
}
#search{
  width: 100%;
  height: 26px;
  border: 1px solid #ccc;
  display: flex;
}
#search>input{
  width: 100%;
  height: 24px;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 3px 4px;
  box-sizing: border-box;
}
#search>span{
  display: inline-block;
  height: 100%;
  background-color: white;
  text-align: center;
  line-height: 26px;
  font-size: 18px;
  padding: 0 5px;
}
#search>span:hover{
  cursor: pointer;
  color: purple;
}
#homeRight{
  width: 500px;
  height: 90%;
  background-color: #6E8B3D;
}
</style>


