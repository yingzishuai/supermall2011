<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index"
      :class="{active: index === currentIndex} "
      @click="itemControl(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemControl(index) {
        this.currentIndex = index
        // 传给父组件
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style lang='scss' scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 89;

  div {
    width: 100%;
    &.active {
    color: #FF8D97;
    span {
      border-bottom: 2px solid #FF8D97;
      padding: 5px;
    }
  }
  }
}
</style>