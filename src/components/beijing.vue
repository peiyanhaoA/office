<template>
    <div v-on:click="jump">
        <p>这是北京城市的页面</p>
        <p>去玩儿{{ this.$route.query.id }}</p>
    </div>
</template>
<script>
export default {
  name: 'beijing',
  methods: {
    jump: function () {
      this.$router.push({path: '/console'})
    }
  }
}
</script>
<style>

</style>


