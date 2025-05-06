/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr = nums.map((val)=>{
        return nums[val]
    });
    return arr
};
