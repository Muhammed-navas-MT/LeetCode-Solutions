/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let maxScore = -1;
    let result = Infinity;

    for (let d of divisors) {
        let count = 0;
        for (let val of nums) {
            if (val % d === 0) {
                count++;
            }
        }

        // Update if this divisor has a better score,
        // or same score but smaller value
        if (count > maxScore || (count === maxScore && d < result)) {
            maxScore = count;
            result = d;
        }
    }

    return result;
};

