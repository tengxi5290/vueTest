<template>
  <div class="index" style="padding-bottom: 60px;">
    <!-- 每个视频块 -->
    <div class="author-list" v-for="(videoList, index) in videoLists">
    	<div class="author-swiper-zone" :style="{backgroundImage: 'url(' + videoList.author_avatar + ')'}" @click="toHello"></div>
    	<div class="author-desc-zone">
    		<div class="author-desc-avatar" :style="{backgroundImage: 'url(' + videoList.author_avatar + ')'}" @click="toAuthor(index)">
    			<!-- <img :src="{{videoList.author_avatar}}"> -->
    		</div>
    		<div class="author-name-and-date">
    			<div class="author-desc-name">{{videoList.author_name}}</div>
    			<div class="author-desc-date">{{videoList.author_date}}</div>
    		</div>
    		<div style="clear: both;"></div>
    	</div>
    </div>
    <!-- 每个视频块 -->
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './tab'
export default {
  name: 'author',
  components: {
    Tab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      videoLists: [
      	{
      		video_bg: 'https://res.papitube.com/html/bg/got-page.png',
      		author_avatar: 'https://res.papitube.com/html/bg/got-page.png',
      		author_name: '藤西',
      		author_date: '2015-06-08',
      		count: '1'
      	},
      	{
      		video_bg: 'https://res.papitube.com/html/bg/got-page.png',
      		author_avatar: 'https://res.papitube.com/html/bg/got-page.png',
      		author_name: '哈哈',
      		author_date: '2015-06-08',
      		count: '1'
      	},
      	{
      		video_bg: 'https://res.papitube.com/html/bg/got-page.png',
      		author_avatar: 'https://res.papitube.com/html/bg/got-page.png',
      		author_name: '狗带',
      		author_date: '2015-06-08',
      		count: '1'
      	},
      	{
      		video_bg: 'https://res.papitube.com/html/bg/got-page.png',
      		author_avatar: 'https://res.papitube.com/html/bg/got-page.png',
      		author_name: '来吧',
      		author_date: '2015-06-08',
      		count: '1'
      	},
      	{
      		video_bg: 'https://res.papitube.com/html/bg/got-page.png',
      		author_avatar: 'https://res.papitube.com/html/bg/got-page.png',
      		author_name: '疯了',
      		author_date: '2015-06-08',
      		count: '1'
      	}
      ]
    }
  },
  methods: {
  	toAuthor: function (index) {
  		console.log(index)
      this.$router.push({path:'/profile'})
  	},
    toHello: function () {
      console.log('这里应该有跳转事件')
      this.$router.push({path:'/detail'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
  @function pxTorem($px){
    @return $px / 75 * 1rem;
  }
  @mixin bgimg($repeat: no-repeat, $position: center, $size: cover) {
	  background-repeat: $repeat;
	  background-position: $position;
	  background-size: $size;
	}
  .author-list {
  	background-color: gold;
  	padding-left: pxTorem(16);
  	padding-right: pxTorem(16);
  	padding-top: pxTorem(12);
  	padding-bottom: pxTorem(12);
  }
  .author-swiper-zone {
  	height: pxTorem(100);
  	background-color: lightblue;
  	@include bgimg;
  }
  .author-desc-zone {
  	background-color: olive;
  	padding-left: pxTorem(16);
  	padding-right: pxTorem(16);
  	margin-top: pxTorem(10);
  }
  .author-desc-avatar {
  	width: pxTorem(48);
  	height: pxTorem(48);
  	border-radius: 100%;
  	background-color: orange;
  	float: left;
  	@include bgimg;
  }
  .author-name-and-date {
  	float: right;
  	background-color: indianred;
  	text-align: right;
  }
  .author-desc-name {
  	font-size: pxTorem(14);
  	color: #343a3e;
  	height: pxTorem(24);
  	line-height: pxTorem(24);
  }
  .author-desc-date {
  	font-size: pxTorem(14);
  	color: #7e7e7e;
  	height: pxTorem(24);
  	line-height: pxTorem(24);
  }
</style>
