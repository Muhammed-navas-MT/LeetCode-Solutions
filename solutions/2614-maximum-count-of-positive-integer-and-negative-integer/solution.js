/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let count= 0;
    let count1 = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            count++;
        }else if(nums[i] > 0){
            count1++
        }
    }
    if(count >count1){
        return count;
    };
    return count1;
};
