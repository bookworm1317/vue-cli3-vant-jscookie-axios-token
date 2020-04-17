import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Toast,Button } from 'vant'
Vue.use(Toast).use(Button)

import './utils/rem.js'
//验证是否登录
import './utils/common/permission.js'

Vue.config.productionTip = false

//引入vant样式
import 'vant/lib/index.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
