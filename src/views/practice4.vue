<template>
    <div class="practice4">
        <p>4、给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。</p>
        <h3>示例</h3>
        <P>输入: "babad"</P>
        <P>输出: "bab"</P>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "practice4",
        data(){
            return {
                str: "abcaqwe",
                temp: 0,            // 数组长度
                list: [],
            }
        },
        methods: {
            fn(){
                
            }
        }
    }
</script>
