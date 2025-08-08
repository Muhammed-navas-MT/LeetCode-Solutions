/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result = [];
   while(nums.length){
       let alice = Math.min(...nums);
       let index1 = nums.indexOf(alice)
        nums.splice(index1,1);
       let bob = Math.min(...nums);
       let index2 = nums.indexOf(bob)
        nums.splice(index2,1);
      result.push(bob,alice)
   };
   return result;
};
