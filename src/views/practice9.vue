<template>
    <div class="practice9">
        <p>9、最长公共前缀</p>
        <p>编写一个函数来查找字符串数组中的最长公共前缀。</p>
        <p>示例 1:</p>
        <p>输入: ["flower","flow","flight"]</p>
        <p>输出: "fl"</p>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "practice9",
        data(){
            return {
                list: ["flower","flow","floght"],
                temp: "",           // 初始化，作为比较
            }
        },
        methods: {
            fn(){
                this.temp = this.list[0];
                for (let i = 0; i < this.list.length; i++) {
                    // console.log(1);
                    let j = 0;
                    for (; j < this.temp.length && j < this.list[i].length; j++) {
                        if(this.temp.charAt(j) !== this.list[i].charAt(j)){
                            break;
                        }
                        // console.log(2);
                    }
                    this.temp = this.temp.substring(0, j);
                    if(this.temp === ""){
                        this.temp = "";
                    }
                }
                console.log(this.temp);
            }
        },
        mounted() {
            this.fn()
        }
    }
</script>
