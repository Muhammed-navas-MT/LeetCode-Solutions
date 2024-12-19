/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum =0;
    let r = Math.max(...nums)
    for(let i=0;i<k;i++){
        sum= sum+r+i
        console.log(sum)
    }
   return sum
   
};
