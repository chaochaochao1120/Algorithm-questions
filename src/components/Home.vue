<template>
    <div class="home">
        <ul class="list">
            <li v-for="(item, index) in list" :key="index"><router-link :to="item.path">{{item.title}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                list: [
                    {
                        title: "1、两数之和",
                        path: "practice1"
                    },
                    {
                        title: "2、无重复字符的最长子串",
                        path: "practice2"
                    },
                    {
                        title: "3、寻找两个正序数组的中位数",
                        path: "practice3"
                    },
                    {
                        title: "4、最长回文子串",
                        path: "practice4"
                    },
                    {
                        title: "5、Z 字形变换",
                        path: "practice5"
                    },
                    {
                        title: "6、整数反转",
                        path: "practice6"
                    },
                    {
                        title: "7、回文数",
                        path: "practice7"
                    },
                    {
                        title: "8、罗马数字转整数",
                        path: "practice8"
                    },
                ],
            }
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
            padding: 0;

            li{
                line-height: 50px;
                width: 50%;
                height: 50px;
                font-size: 20px;
                background: #e8f3fe;
                color: #7dbcfc;
                margin: 10px auto;
                box-sizing: border-box;
                padding-left: 50px;

                a{
                    text-decoration: none;
                    color: #000;

                    &:hover{
                        color: #7dbcfc;
                    }
                }
            }
        }
    }
</style>