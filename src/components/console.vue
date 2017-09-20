<template>
  <div id="main">
    <div id="l">
      <span>场景：1</span>
    </div>
    <div id="offset" @mousedown="getZ">
      <div class="child" v-drag></div>
      <div class="child" v-drag></div>
      <div class="child" v-drag></div>
      <span class="iconfont" @click="add">&#xe6ea;</span>
    </div>
  </div>
  
</template>
<script scoped>
export default {
  name: 'console',
  data () {
    return {
      arr: []
    }
  },
  methods: {
    getZ: function (e) {
      var c = e.currentTarget.children
      for (var i = 0; i < c.length; i++) {
        c[i].style.zIndex = 1
      }
      e.target.style.zIndex = 2
    },
    add: function () {
      let children = document.getElementsByClassName('child')
      var coordArr = []
      for (var i = 0; i < children.length; i++) {
        var coordinate = {}
        coordinate.x = children[i].style.left
        coordinate.y = children[i].style.top
        coordArr.push(coordinate)
      }
      this.arr.push(coordArr)
      // console.log(this.arr)
    }
  },
  mounted: function () {
    var cDiv = document.getElementsByClassName('child')
    var instalCoord = {}
    var instalArr = []
    for (var i = 0; i < cDiv.length; i++) {
      instalCoord.x = cDiv[i].style.left
      instalCoord.y = cDiv[i].style.top
      instalArr.push(instalCoord)
    }
    this.arr.push(instalArr)
    // console.log(this.arr)
  },
  watch: {
    '$route' (to, from) {
      console.log('从' + from.params.id + '到' + to.params.id)
    }
  }
}
</script>
<style scoped>
@import '../libs/iconfont/iconfont.css';
#main{
  width: 90%;
  height: 100%;
  margin-top: 20px;
}
#l{
  width: 40%;
  margin: 100px auto 0;
}
#offset{
    width: 40%;
    height: 60%;
    border: 1px solid black;
    margin: 0 auto;
    position: relative;
}
.child{
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: #ef1;
    border: 1px solid purple;
}
#offset>span{
  font-size: 20px;
  position: absolute;
  left: -20px;
}
#offsetLists{
  width: 
}
</style>


