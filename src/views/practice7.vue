<template>
    <div class="practice6">
        <p>回文数</p>
        <p>示例 1:</p>
        <p>输入: 123</p>
        <p>输出: 321</p>

        <p>示例 2:</p>
        <p>输入: 121</p>
        <p>输出: true</p>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "practice5",
        data(){
            return {
                num: 121,
            }
        },
        methods: {
            fn(){
                let str = "";
                let newStr = "";
                str = this.num + "";
                newStr = str.split("").reverse().join("");
                console.log(str === newStr)
            }
        },
        mounted() {
            this.fn()
        }
    }
</script>
