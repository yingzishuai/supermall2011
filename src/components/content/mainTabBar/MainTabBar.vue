<template>
    <tab-bar>
      <tab-bar-item path="/home" :activeClass="aciveClass">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">  
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-active-icon">  
        <div slot="item-text">首页</div>
      </tab-bar-item>  
      <tab-bar-item path="/cart" :activeClass="aciveClass">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">  
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-active-icon">  
        <div slot="item-text">购物车</div>
      </tab-bar-item>  
      <tab-bar-item path="/category" :activeClass="aciveClass">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">  
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-active-icon">  
        <div slot="item-text">类目</div>
      </tab-bar-item>  
      <tab-bar-item path="/profile" :activeClass="aciveClass">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">  
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-active-icon">  
        <div slot="item-text">我的</div>
      </tab-bar-item>  
    </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
    name: '',
    data() {
      return {
        aciveClass: '#FF5777'    //active选择时的颜色
      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style lang='less' scoped>

</style>