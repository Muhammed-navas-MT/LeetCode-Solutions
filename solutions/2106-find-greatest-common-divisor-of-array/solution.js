/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let small =nums[0];
    let larg = nums[0];
    for(let i=0;i<nums.length;i++){
        if(small>nums[i]){
            small=nums[i];
        }else if(larg<nums[i]){
            larg=nums[i];
        };
    };
    while (small !== 0) {
        let temp = small;
        small = larg % small;
        larg = temp;
    }
    return larg; 
};


