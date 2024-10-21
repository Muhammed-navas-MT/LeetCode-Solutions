/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let u =[...new Set(nums)]
    if(nums.length != u.length){
        return true;
    }else{
        return false;
    }
};
