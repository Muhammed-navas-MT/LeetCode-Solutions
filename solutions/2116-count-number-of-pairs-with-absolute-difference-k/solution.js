/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0;
    for(let i =0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let max = Math.max(nums[j],nums[i]);
            let min = Math.min(nums[j],nums[i]);
            if(max - min == k){
                count++;
            }
        }
    };
    return count
};
