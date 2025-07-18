/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    let unique = [...new Set(nums)];
    unique.sort((a, b) => a - b);

    let max = 1;
    let current = 1;

    for (let i = 1; i < unique.length; i++) {
        if (unique[i] === unique[i - 1] + 1) {
            current++;
        } else {
            current = 1;
        }
        max = Math.max(max, current);
    }

    return max;
};

