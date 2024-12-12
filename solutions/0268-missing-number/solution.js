/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numSet = new Set(nums); // Use a Set for O(1) lookup
    const maxNum = Math.max(...nums); // Find the maximum number in the array
    
    for (let i = 0; i <= maxNum + 1; i++) { // Check from 0 to maxNum + 1
        if (!numSet.has(i)) { // If the number is missing in the Set
            console.log("Smallest missing number is:", i);
            return i;
        }
    }
}

