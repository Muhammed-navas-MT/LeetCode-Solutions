/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max1 = 0; // Maximum (nums[i] - nums[j])
    let max2 = 0; // Maximum (nums[i] - nums[j]) * nums[k]
    
    let maxPrefix = nums[0]; // Keep track of max seen so far

    for (let j = 1; j < nums.length - 1; j++) {
        max1 = Math.max(max1, maxPrefix - nums[j]); // Update max1 (nums[i] - nums[j])
        max2 = Math.max(max2, max1 * nums[j + 1]); // Update max2 (max1 * nums[k])
        maxPrefix = Math.max(maxPrefix, nums[j]); // Update maxPrefix
    }

    return max2;
};
