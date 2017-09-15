<template>
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'app',
  data () {
    return {
      height: ''
    }
  },
  mounted: function () {
    let h = window.innerHeight || document.documentElement.clientHeight
    this.$refs.app.style.height = h + 'px'
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
