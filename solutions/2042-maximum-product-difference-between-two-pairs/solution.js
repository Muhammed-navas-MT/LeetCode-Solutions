/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let asent = nums.sort((a,b)=>a-b);
    let p1= asent[0];
    let p2 = asent[1];

    let desnt = nums.sort((a,b)=>b-a);
    let pp1 = desnt[0];
    let pp2 = desnt[1];

    let big = pp1*pp2;
    let small = p1*p2;

    return big - small;
    
};
