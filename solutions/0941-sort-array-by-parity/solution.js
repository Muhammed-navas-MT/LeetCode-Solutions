/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr = [];
    for(let val of nums){
        val % 2 === 0 ?arr.unshift(val) : arr.push(val)
    }
    return arr
};
