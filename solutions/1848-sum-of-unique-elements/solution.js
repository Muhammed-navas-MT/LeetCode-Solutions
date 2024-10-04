/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    var sum=0;
    
    for (let i=0;i<nums.length;i++){
        var f=1;
        var u =nums[i];
        for(let j=0;j<nums.length;j++){
            if(i!=j && u==nums[j]){
                f=0;
               
            }
            
        }
        if(f==1){
            console.log(nums[i]);
            sum=sum+nums[i];
        }
    }
    return sum;
};
