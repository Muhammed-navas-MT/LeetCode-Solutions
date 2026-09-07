/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let latest = 0;
    let result = [];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(i==0){
            latest = nums[i]+k;
            result.push(nums[i]+k)
        }else{
            for(let j=-k;j<=k;j++){
                let sum = nums[i]+j;
                if(sum >=latest){
                    latest = sum;
                    result.push(sum);
                    break;
                }
            }
        }
    };
    const max = Math.max(...result);
    const min = Math.min(...result);
    return max - min;
};
