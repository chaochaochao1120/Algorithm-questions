<template>
    <div class="practice6">
        <p>给出一个32位的有符号整数，你需要将这个整数中每位上的数字进行反转。</p>
        <p>示例 1:</p>
        <p>输入: 123</p>
        <p>输出: 321</p>

        <p>示例 2:</p>
        <p>输入: -123</p>
        <p>输出: -321</p>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "practice6",
        data(){
            return {
                num: 3123,
            }
        },
        methods: {
            fn(){
                let str = this.num.toString();
                let list = str.split("");
                if(list[0] === "-"){
                    list.shift(0);
                    this.num = -Number(list.reverse().join(""));
                    console.log(this.num);
                }else{
                    this.num = Number(list.reverse().join(""));
                    console.log(this.num);
                }
            }
        },
        mounted() {
            this.fn()
        }
    }
</script>
