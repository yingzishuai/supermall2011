<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>