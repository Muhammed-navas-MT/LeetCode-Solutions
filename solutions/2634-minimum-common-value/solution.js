/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let arr1 = new Set(nums1)
    let arr2 = new Set(nums2);
    let arr3 = []
    for(let num of arr1){
        let val = arr2.has(num);
        if(val){
            arr3.push(num)
        }
    }
    if(arr3.length === 0){
        return -1
    }
    return Math.min(...arr3)
};
