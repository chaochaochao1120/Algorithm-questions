<template>
    <div class="practice">
        <p>3、给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。</p>
        <h3>示例</h3>
        <P>输入：nums1 = [1,3], nums2 = [2]</P>
        <P>输出：2.00000</P>
        <P>解释：合并数组 = [1,2,3] ，中位数 2</P>

        <router-link to="/">返回</router-link>
    </div>
</template>

<script>
    let list1 = [0,0];
    let list2 = []
    let newList = list1.concat(list2);
    let len = newList.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if(newList[j] > newList[j + 1]){
                let temp = newList[j];
                newList[j] = newList[j + 1];
                newList[j + 1] = temp;
            }
        }
    }
    console.log(newList);
    if(len % 2 === 0){
        console.log((newList[len / 2] + newList[len / 2 - 1]) / 2);
    }else{
        console.log(newList[Math.floor(len / 2)]);
    }
</script>
