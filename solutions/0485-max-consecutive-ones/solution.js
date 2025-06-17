/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let arr =[];
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            console.log(i)
            if(nums[i-1] === 1){
                console.log()
                count++;
            }else{
                arr.push(count);
                count= 0;
                count++;
            }
        }
    };
    arr.push(count)
    console.log(arr)
    return Math.max(...arr)
};
