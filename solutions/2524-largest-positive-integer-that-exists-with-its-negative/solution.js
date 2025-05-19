/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let p = [];
    let n = [];
    for(let val of nums){
        if(val >0){
            p.push(val)
        }else{
           n.push(Math.abs(val));
        }
    };
    p.sort((a,b)=>b-a);
    n.sort((a,b)=>b-a);
    for(let val of p){
        for(let val2 of n){
            if(val === val2){
                return val
            }
        }
    };
    return -1
};
