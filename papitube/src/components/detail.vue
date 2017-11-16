<template>
  <div class="detail">
    <div class="detail-video">
      <video src="https://res.papitube.com/video/gaosan.mp4" controls="controls" width="" height=""></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      
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
  .detail {
    width: pxTorem(375);
    height: pxTorem(667);
    background-color: olive;
  }
  .detail-video {
    width: pxTorem(375);
    height: pxTorem(200);
    background-color: lightblue;
  }
  video {
    width: 100%;
    height: 100%;
  }
</style>
