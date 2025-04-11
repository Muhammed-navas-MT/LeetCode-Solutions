/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let seen = new Set()
    let dublicate = new Set()

    for(let num of nums){
        if(seen.has(num)){
            dublicate.add(num)
        }else{
            seen.add(num)
        }
    }
    return [...dublicate]
};
