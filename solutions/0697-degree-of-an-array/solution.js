/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const firstIndex = {};
    const lastIndex = {};
    const counts = {};
    let degree = 0;

    for(let i=0;i<nums.length;i++){
        const num = nums[i];
        if(firstIndex[num] === undefined){
            firstIndex[num] = i
        }

        lastIndex[num] = i;

        counts[num] = (counts[num] || 0) + 1;
        degree = Math.max(degree,counts[num]);
    };

    let minlegnth = nums.length;
    for(let num in counts){

        if(counts[num] === degree){
            let length = lastIndex[num] - firstIndex[num] + 1;
            minlegnth = Math.min(minlegnth,length);
        }
    }
    return minlegnth
};
