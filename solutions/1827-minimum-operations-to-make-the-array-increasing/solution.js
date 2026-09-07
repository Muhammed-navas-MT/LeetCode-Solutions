/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[i] <= nums[i-1]){
            let dist = nums[i] - nums[i-1];
        count = (count + Math.abs(dist)) + 1;
        nums[i] = (nums[i]+ Math.abs(dist))+1;
        }
    };
    console.log(nums)
    return count;
};
