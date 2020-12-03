<template>
  <div class="home-recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.home-recommend {
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;

  img {
    width: 80%;
  }
  p {
    margin-top: 5px;
  }
}
</style>