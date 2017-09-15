<template>
  <div id="offset">
      <div class="child" v-drag></div>
      <div class="child" v-drag></div>
      <div class="child" v-drag></div>
      <span class="iconfont" @click="add">&#xe6ea;</span>
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
    add: function () {
      let d = document.getElementsByClassName('child')
      var zarr = []
      for (var i = 0; i < d.length; i++) {
        var zb = {}
        zb.x = d[i].style.left
        zb.y = d[i].style.top
        zarr.push(zb)
      }
      console.log(zarr)
    }
  }
}
</script>
<style>
@import '../libs/iconfont/iconfont.css';
#offset{
    width: 400px;
    height: 400px;
    border: 1px solid yellow;
    margin: 100px;
    position: relative;
}
.child{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: absolute;
    background-color: #ef1;
}
span{
  font-size: 20px;
  position: fixed;
  top: 80px;
  left: 100px;

}
</style>


