/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1 = [];
    let arr2 = [];
    for(let i=0;i<nums1.length;i++){
        if(!nums2.includes(nums1[i]) && !nums1.includes(nums1[i],i+1)){
            arr1.push(nums1[i])
        }
    };
    for(let i=0;i<nums2.length;i++){
        if(!nums1.includes(nums2[i]) && !nums2.includes(nums2[i],i+1)){
            arr2.push(nums2[i])
        }
    };
    return [arr1,arr2]
};
