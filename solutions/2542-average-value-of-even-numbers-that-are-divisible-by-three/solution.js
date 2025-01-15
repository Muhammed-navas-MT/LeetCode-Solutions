/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
//     let sum = 0;
//     let count =0;
//     for(let val of nums ){
//         if(val % 2 === 0 && val % 3 === 0){
//             sum =sum + val;
//             count++
//         }
        
//     }
//     if(count === 0){
//         return 0
//     }
//    let rt = Math.floor(sum / count);
//     console.log(rt)
//         return rt

let sum = 0;
let count = 0;

for(let i=0;i<nums.length;i++){
    if(nums[i]%6===0){
        sum+=nums[i];
        count++;
    }
}
return count===0 ? 0 : Math.floor(sum/count);
};
