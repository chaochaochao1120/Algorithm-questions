<template>
    <div class="practice">
        <p>2、给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。</p>
        <h3>示例</h3>
        <p>输入: "abcabcbb"</p>
        <p>输出: 3 </p>
        <p>解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。</p>


        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    let str = 'abcabcabc';
    let length = str.length;
    let index = [];
    let temp = 0;
    for (let i = 0; i < length; i++) {
        temp = index.indexOf(str[i]);
        if(temp === -1){
            index.push(str.charAt(i));
        }else{
            index.splice(0, index + 1);
        }
    }

    console.log(index, index.length)
</script>