/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count=0;
    for(let i=0; i<nums2.length;i++){
        for(let j=0;j<nums1.length;j++){
            let f=nums2[i]*k;
            if(nums1[j]%f==0){
                count++;
            }
        }
    }
    return count;
};
