<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->

    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2 @click="getData">Router Basic - 01</h2>
        </div>
      </div>
    </div>

     <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <ul class="list-group">
            <!--使用指令v-link进行导航-->
            <a class="list-group-item"><router-link to="/home">Home</router-link></a>
            <a class="list-group-item"><router-link to="/about">About</router-link></a>
            <a class="list-group-item"><router-link to="/contact">Contact</router-link></a>
            <a class="list-group-item"><router-link to="/">Index</router-link></a>
          </ul>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!--用于渲染匹配的组件-->
              <router-view class="view zero"></router-view>
              <router-view class="view one" name="first"></router-view>
              <router-view class="view two" name="second"></router-view>
              <router-view class="view three" name="third"></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    getData: function () {
      this.$axios({
        method: 'get',
        url: 'https://sandbox.papitube.com/wechat/provinces',
        headers: {
          Accept: 'application/vnd.Virgo.v1+json'
        },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (response) {
        console.log(response)
      })
    }
  },
  // 页面加载完成时执行的方法
  mounted: function () {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.zero {
  background-color: gold;
}
.one {
  background-color: orange;
}
.two {
  background-color: cyan;
}
.three {
  background-color: olive;
}
</style>
