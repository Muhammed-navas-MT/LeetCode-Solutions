/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let numSum = 0;
    let dSum = 0;
    for(let val of nums){
        numSum += val;
    };
    let dArr = nums.join("").split("");
    for(let val of dArr){
        dSum += +val;
    };
    return numSum - dSum;
};
