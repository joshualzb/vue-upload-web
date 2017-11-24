// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import headerPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import uploadPage from './views/upload.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                header: headerPage,
                default: homePage
            },
            name: '首页'
        },
        {
            path: '/about',
            components: {
                header: headerPage,
                default: aboutPage
            },
            name: '关于'
        },
        {
            path: '/upload',
            components: {
                header: headerPage,
                default: uploadPage
            },
            name: '文件上传'
        }
    ]
})