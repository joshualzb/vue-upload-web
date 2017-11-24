<template>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="#/">首页</a></el-menu-item>
        <el-menu-item index="2"><a href="#/about">关于我们</a></el-menu-item>
        <el-menu-item index="3"><a href="#/upload">文件上传</a></el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>