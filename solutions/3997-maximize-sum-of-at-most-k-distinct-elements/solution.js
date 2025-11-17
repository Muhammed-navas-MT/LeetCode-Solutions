/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let result = Array.from(new Set(nums))
    return result.sort((a,b)=>b-a).splice(0,k);   
};
