<template>
  <div class="test">{{test}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 'test msg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    width: 300px;
    height: 300px;
    background-color: olive;
  }
</style>
