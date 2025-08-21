/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    return find(nums)
};

function find(arr,result =[],i=0){
    if(i=== arr.length){
        return result
    };
    if(arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])){
        result.push(arr[i])
    };
    return find(arr,result,i+1);
}
