/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = nums.filter((value)=>{
        return nums.indexOf(value)===nums.lastIndexOf(value);
    });
    console.log(num)
    return num[0]
};
