<template>
<div id="main">
  <div id="nav">
    <span class="iconfont back active" @click="goBack">&#xe631;</span>
    <div id="middle">
      <span @click="goHome">首页</span>
    </div>
    <div class="Ncity">
      <span class="active">城市</span>
      <div id="navList">
        <div v-for="city in citys">
          {{ city.name }}
        </div>
      </div>
    </div>
  </div>
  <div id="home" v-if="isShow">
      <div id="homeLeft">
        <div id="search">
            <input type="text" v-on:keyup.13="search(val)" v-model:value="val">
            <span class="iconfont" @click="search(val)">&#xe620;</span>
        </div>
        
        <ul id="showUL">
            <li v-for="city in citys" class="list" @click="goCity">
                {{ city.name }}
            </li>
        </ul>
      </div>
      <div id="homeRight"></div>
  </div>
  <router-view v-else></router-view>
</div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      citys: [
        {name: '北京', path: '/home/beijing', id: '1', ename: 'beijing'},
        {name: '南京', path: '/home/nanjing', id: '2', ename: 'beijing'},
        {name: '上海', path: '/home/shanghai', id: '3', ename: 'beijing'},
        {name: '乌镇', path: '/home/wuzhen', id: '4', ename: 'beijing'}
      ],
      val: '',
      isShow: true
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    search: function (val) {
      var arr = []
      this.citys.forEach(function (e, i) {
        arr.push(e.name)
      })
      var i = arr.indexOf(val)
      this.isShow = false
      this.$router.push({path: this.citys[i].path, query: {id: this.citys[i].id}})
      this.val = ''
    },
    goCity: function (e) {
      this.isShow = false
      var index = e.currentTarget.index
      console.log(index)
      this.$router.push({path: this.citys[index].path, query: {id: this.citys[index].id}})
    },
    goHome: function () {
      this.isShow = true
      this.$router.push('/home')
    }
  },
  mounted: function () {
    var li = document.getElementsByTagName('li')
    for (var i = 0; i < li.length; i++) {
      li[i].index = i
    }
  },
  updated: function () {
    var li = document.getElementsByTagName('li')
    for (var i = 0; i < li.length; i++) {
      li[i].index = i
    }
    if (!this.$route.query.id) {
      this.isShow = true
    }
  }
}
</script>
<style scoped>
@import '../libs/iconfont/iconfont.css';
#main{
  width: 90%;
  height: 90%;
  margin: auto;
  background-color: rgb(244,244,244);
}

#nav{
  width: 100%;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3A60C7;
  color: #383838;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  }
#nav span{
  padding: 3px 13px;
}
#middle>span:hover{
  cursor: pointer;
  color: white;
  background-color: #8B5A00;
  border-radius: 3px;
}
.back{
  margin-left: 20px;
}
.active:hover{
  cursor: pointer;
  color: white;
}
.Ncity{
  position: relative;
  margin-right: 20px;
}
.Ncity:hover>#navList{
  display: block;
}
#navList{
  position: absolute;
  display: none;
  background-color: #8EE5EE;
  width: 120px;
  text-align: center;
  right: -20px;
}
#navList>div{
  width: 100%;
  padding: 5px 0;
}
#navList>div:hover{
  background-color: #8B7B8B;
  color: white;
  cursor: pointer;
}
  #home{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  }

  #homeLeft{
  width: 20%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ade;
  margin-right: 30px;
  }
  #search{
  width: 80%;
  height: 26px;
  border: 1px solid #ccc;
  display: flex;
  }
  #search>input{
  width: 100%;
  height: 26px;
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
  padding-right: 5px;
  }
  #search>span:hover{
  cursor: pointer;
  color: purple;
  }
  #showUL{
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  }
  #showUL>li{
  width: 50%;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: yellowgreen;
  color: #4D4D4D;
  letter-spacing: 4px;
  }
  #showUL>li:hover{
  cursor: pointer;
  color: #2B2B2B;
  }
  #homeRight{
  width: 60%;
  height: 80%;
  border: 1px solid purple;
  display: flex;
  justify-content: space-around;
  align-items: center;
  }
</style>


