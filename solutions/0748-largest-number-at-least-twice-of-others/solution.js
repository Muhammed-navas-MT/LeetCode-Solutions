/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let val = false;
    let largest = Math.max(...nums);
    for(let i=0;i<nums.length;i++){
        if(largest !== nums[i]){
            let m = nums[i] *2;
            if(m > largest){
                val = true;
                break;
            }
        }
    }
    if(val){
        return -1;
    }else{
        return nums.indexOf(largest);
    }

};
