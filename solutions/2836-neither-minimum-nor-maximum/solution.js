/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    if(nums.length <= 2){
        return -1
    }

    nums = nums.filter((item)=>{
        return item !== min && item !== max;
    });
    console.log(nums)

    return nums[0]
    
};
