<template>
  <div class="tab-template">
    <div class="index-bottom-tab">
      <!-- <ul class="index-bottom-tab-ul"> -->
        <li class="index-bottom-tab-col"><router-link to="/index">首页</router-link></li>
        <li class="index-bottom-tab-col"><router-link to="/broadlist">播单</router-link></li>
        <li class="index-bottom-tab-col"><router-link to="/author">作者</router-link></li>
        <li class="index-bottom-tab-col"><router-link to="/mine">我的</router-link></li>
      <!-- </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      location: 'indexs',
      ifActive: true,
    }
  },
  watch: {
    location: function (val, oldval) {  
      console.log(this._data.a)  
    }　　
　},
  methods: {
    
  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
  @function pxTorem($px){
    @return $px / 75 * 1rem;
  }
  .index-bottom-tab {
    width: 100%;
    height: pxTorem(60);
    background-color: pink;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .index-bottom-tab-col {
    width: 25%;
    height: pxTorem(60);
    background-color: brown;
    text-align: center;
    line-height: pxTorem(60);
    float: left;
    list-style-type: none;
  }
  .index-bottom-tab-col a {
    text-decoration: none;
    color: #ffffff;
    font-size: pxTorem(16);
    display: block;
  }
  .router-link-active {
    background-color: indianred;
  }
</style>
