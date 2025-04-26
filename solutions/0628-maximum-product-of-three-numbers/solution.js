/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=> b-a);
    let l = nums.length;
    let value1 = nums[0] * nums[1] * nums[2];
    let value2 = nums[0] * nums[l-1] * nums[l-2];
    return value1 > value2 ? value1 : value2;
};

