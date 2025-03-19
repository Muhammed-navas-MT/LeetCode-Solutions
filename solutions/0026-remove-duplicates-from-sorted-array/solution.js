/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
              let value =  nums.splice(i,1);
              i--
               break;
            }
        }
    }
};
