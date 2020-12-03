<template>
  <div id="detail">
    详情页
    <!-- <nav-bar class="detail-nav"><div slot="center">详情页</div></nav-bar> -->
  </div>
</template>

<script>
  // import NavBar from 'components/common/navbar'
  export default {
    /* components: {
      NavBar
    }, */
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.$route.params.iid
    }
  }
</script>

<style lang='scss' scoped>

</style>