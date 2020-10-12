<template>
    <div class="home">
        <ul class="list">
            <li><router-link to="practice1">1、这是第一道题</router-link></li>
            <li><router-link to="practice2">2、这是第二道题</router-link></li>
            <li><router-link to="practice3">3、这是第三道题</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;
        height: 100%;

        .list{
            width: 100%;
            height: 100%;
            list-style: none;

            li{
                line-height: 35px;
                width: 100%;
                text-align: center;
                font-size: 20px;

                a{
                    text-decoration: none;
                }
            }
        }
    }
</style>