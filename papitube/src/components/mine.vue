<template>
  <div class="index">
    mine
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './tab'
export default {
  name: 'HelloWorld',
  components: {
    Tab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
