<template>
    <div>
        <h1>文件上传</h1>
        <hr>
        <uploader :options="options" :status="status" @file-success="fileSuccess">
            <uploader-unsupport></uploader-unsupport>
            <uploader-drop>
                <p>拖动文件到这里或者点击下面的按钮</p>
                <uploader-btn :single="false">选择文件</uploader-btn>
                <uploader-btn :attrs="attrs">选择图片</uploader-btn>
            </uploader-drop>
            <uploader-list></uploader-list>
        </uploader>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: {
                    // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
                    target: '//localhost:8080/upload',
                    testChunks: false
                },
                attrs: {
                    accept: 'image/*'
                }
            };
        },
        computed: {

        },
        mounted: function () {

        },
        methods: {
            fileSuccess(rootFile, file) {
                this.$http.get(
                    '//localhost:8080/complete',
                    {
                        params: {
                            uniqueIdentifier: file.uniqueIdentifier,
                            name: file.name,
                            chunkSize: file.chunks.length
                        }
                    },
                    {
                        emulateJSON: true
                    }
                ).then(function (data) {

                }, function (err) {
                    this.$message.error('网络通讯错误')
                });
            }
        }
    }
</script>