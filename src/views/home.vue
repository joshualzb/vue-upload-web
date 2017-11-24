<template>
    <div>
        <ol>
            <li>
                <router-link to="/upload">文件上传</router-link>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'indexP',
        data() {
            return {}
        },
        methods: {
            eClick() {
                console.log(9999);
            }
        }
    }
</script>
