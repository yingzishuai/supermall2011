<template>
  <div class="goods-list-item" @click="itemDetail">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goods-text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem:{
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemDetail() {
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style lang='scss' scoped>
.goods-list-item {
  width: 50%;
  text-align: center;
  padding: 5px;
  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .goods-text {
    background-color: #fff; 
    font-size: 12px;
    overflow: hidden;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 3px;
    }
    
    .price {
      color: #FF8E97;
    }
    .cfav {
      margin-left: 18px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
      }
    }
  }
}
</style>