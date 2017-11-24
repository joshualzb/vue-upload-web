// vue
import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
// 请求
import VueResource from 'vue-resource'
// UI
import ElementUI from 'element-ui'
// vuex
import Vuex from 'vuex'
//文件上传
import uploader from 'vue-simple-uploader'
import router from './routes.js'

// UI样式
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/base.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(uploader)

Vue.config.debug = true;//开启错误提示

const app = new Vue({
    router
}).$mount('#app');