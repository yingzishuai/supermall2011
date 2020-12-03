<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
    // updated() {
      // 创建bscroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, //false div不能点击
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // console.log(this.scroll);

      // 监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }

      // 监听下拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {   //上拉
        this.scroll.finishPullUp()
      },
      refresh() {    // 刷新
        // console.log('---');
        this.scroll.refresh()
      },
      getScrollY() {   //获取y值
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style lang='scss' scoped>
</style>