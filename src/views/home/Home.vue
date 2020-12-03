<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control 
                :titles="['流行','新款','精选']" 
                @tabClick="tabClick" 
                ref="tabControlRef2"
                class="tab-control-top"
                v-show="isTabFixed"></tab-control>
    <b-scroll 
              class="bscroll" 
              :probe-type="3" 
      ref="bScroll" 
      @scroll="contentScroll" 
      :pull-up-load="true" 
      @pullingUp="PullUpLoadMore"> 
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control 
        :titles="['流行','新款','精选']" 
        @tabClick="tabClick" 
        ref="tabControlRef"></tab-control>
      
      <goods-list :goods="showGoods"></goods-list>
    </b-scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper.vue'          // 轮播图
  import HomeRecommend from './childComps/HomeRecommend.vue'    // 推荐信息
  import FeatureView from './childComps/FeatureView'            // 本周流行

  import NavBar from 'components/common/navbar/NavBar'  
  import TabControl from 'components/content/tabControl/TabControl'   
  import GoodsList from 'components/content/goodsList/GoodsList'
  import BScroll from 'components/common/bscroll/BScroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultiData, getHomeGoods } from 'network/home'

  import { debounce } from 'common/utils'


  export default {
    name: 'HomeNave',
    components: {
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      BScroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: { page: 0, list: []},
          new: { page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,  //显示右下角回到顶部的图标
        tabOffsetTop: 0,    //tab-control到顶部的距离
        isTabFixed: false,   //是否吸顶
        saveY: 0        //保存页面离开时的y值
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // 创建时加载请求
    created() {
      // 获得banner和recommend数据
      this.getHomeMultiData()
      // 获取goods数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 防抖函数
      const refresh = debounce(this.$refs.bScroll.refresh)
      // 商品图片的加载
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },
    activated() {
      this.$refs.bScroll.scrollTo(0, this.saveY, 0)
      this.$refs.bScroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.bScroll.getScrollY()
    },
    methods: {
      /**
       *  事件监听相关方法
       *  */       
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2: 
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControlRef.currentIndex = index
        this.$refs.tabControlRef2.currentIndex = index
      },
      backTopClick() {
        // console.log(this.$refs.bScroll.scroll.scrollTo.x);
        this.$refs.bScroll.scroll.scrollTo(0, 0, 500)
        this.$refs.bScroll.scrollTo(0, 0)   //在bscroll.vue文件中封装了一个方法
      },
      contentScroll(position) {
        // console.log(position.y);
        this.isShowBackTop = (-position.y) > 1000
        // console.log(-position.y +'---------'+ this.tabOffsetTop);
        this.isTabFixed = -position.y >= this.tabOffsetTop-44
      },
      PullUpLoadMore() {
        this.getHomeGoods(this.currentType)
      },
      // 轮播图的加载
      swiperImgLoad() {
        this.tabOffsetTop = this.$refs.tabControlRef.$el.offsetTop 
      },
      /** 
       *  网络请求相关方法
       * */     
      async getHomeMultiData() {
        const { data } = await getHomeMultiData()
        // console.log(data);
        this.banners = data.banner.list
        this.recommends = data.recommend.list
        
      },
      async getHomeGoods(type){
        const page = this.goods[type].page + 1
        const { data } = await getHomeGoods(type, page)
        // console.log(data);
        this.goods[type].list.push(...data.list)
        this.goods[type].page += 1

        this.$refs.bScroll.finishPullUp()
        
      }
    }
  }
</script>

<style lang='scss' scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}


.bscroll {
  height: calc(100vh - 93px);
  // height: 410px;
  overflow: hidden;
}
.tab-control-top{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 200;

}
</style>