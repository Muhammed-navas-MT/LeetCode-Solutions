/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let num = 0
    for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
        if(nums[i] === nums[j]){
            return nums[i]
        }
       }
    };
    // let keys = Object.keys(num);
    // console.log(keys);
    return num
};
