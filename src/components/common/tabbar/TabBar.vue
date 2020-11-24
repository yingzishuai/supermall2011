<template>
  <div id="TabBar">
    <slot></slot>   <!-- 插槽 要插入东西要加入 -->
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style  scoped>
#TabBar{
  display: flex;
  height: 49px;
  background: #f3f3f3;

  box-shadow: 0 -1 1 rgba(100, 100, 100, 0.2);
  
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>