<template id="about">
    <div>
        <h1 @click="getData">About</h1>
        <p>This is the tutorial about vue-router.</p>
        <p>组件化开发，用路由组件传参,这样，一个vue组件就成了一个全局的公用组件</p>
    </div>
</template>
<script>
export default {
  '/about': 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData: function () {
    	this.$axios('https://sandbox.papitube.com/wechat/provinces', {
    		method: 'get',
    		headers: {
		      Accept: 'application/vnd.Virgo.v1+json'
		    },
    	})
    	.then(function (response) {
    		console.log(response.data)
    	})
    	.catch(function (response) {
    		console.log(response)
    	})
    }
  }
}
</script>