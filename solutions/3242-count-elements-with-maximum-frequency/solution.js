/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // Create a frequency map to count occurrences of each element
    const frequencyMap = new Map();

    // Populate the frequency map
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Find the maximum frequency
    let maxFrequency = Math.max(...frequencyMap.values());

    // Calculate the total frequencies of elements with maximum frequency
    let totalCount = 0;
    for (let [key, freq] of frequencyMap) {
        if (freq === maxFrequency) {
            totalCount += freq;
        }
    }

    return totalCount;
};

