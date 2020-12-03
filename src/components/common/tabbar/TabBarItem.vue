<template>
  <div class="tabBarItem" @click="itemActive">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active-icon"></slot></div>
    <div :style="isActive ? {}: {color:activeClass}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: '',
    props:{
      path: String,
      activeClass: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) == -1 //重点记忆
      }
    },
    methods: {
      itemActive(){
        this.$router.push(        //重点记忆
          {path: this.path},
          onComplete => {},
          onAbort => {}
        )     
      }
    }
  }
</script>

<style lang="scss" scoped>
.tabBarItem{
  flex: 1;

  font-size: 12px;
  text-align: center;
  margin-top: 3px;

  
}
.tabBarItem img{
    height: 22px;
    width: 22px;
  }
</style>