import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入elementUI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

// 事件总线 为了首页的better-scroll能下滑的问题
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
