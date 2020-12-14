<template>
    <div class="practice8">
        <p>8、罗马数字转整数</p>
        <p>示例 1:</p>
        <p>输入: "III"</p>
        <p>输出: 3</p>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "practice8",
        data(){
            return {
                num: "MIIIVM",
            }
        },
        methods: {
            fn(){
                let hashNum = {
                    "I": 1,
                    "V": 5,
                    "X": 10,
                    "L": 50,
                    "C": 100,
                    "D": 500,
                    "M": 1000,
                }
                let result = 0;
                for (let i = 0; i < this.num.length; i++) {
                    hashNum[this.num[i]] < hashNum[this.num[i + 1]] ? result -= hashNum[this.num[i]] : result += hashNum[this.num[i]];
                }
                console.log(result);
            }
        },
        mounted() {
            this.fn()
        }
    }
</script>
