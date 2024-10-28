/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single = nums.filter((val)=>{
        return 10>val;
    });
    let double =nums.filter((val)=>{
        return 10<=val;
    });
    let s=single.reduce((acc,val)=>{
        return acc+val;
    },0);
    let d =double.reduce((acc,val)=>{
        return acc+val
    },0);
    if(s>d || d>s){
        return true;
    }else{
        return false;
    }
};
