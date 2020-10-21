<template>
    <div class="practice">
        <p>1、给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。</p>
        <h3>示例:</h3>
        <p>
            给定 nums = [1, 3, 10, 2, 7, 11, 15], target = 9
        </p>
        <p>
            因为 nums[3] + nums[4] = 2 + 7 = 9
        </p>
        <p>
            所以返回 [3, 4]
        </p>

        <h2>请看控制台</h2>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    let list = [1, 3, 10, 2, 7, 11, 15];
    let target = 9;
    let length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            if(list[i] + list[j] === target){
                console.log(`[${i}, ${j}]`)
            }
        }
    }
</script>
