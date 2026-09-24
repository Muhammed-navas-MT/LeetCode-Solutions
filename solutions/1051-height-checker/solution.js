/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let original = [...heights];
    let result = 0;
    heights.sort((a,b)=>a-b);

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== original[i]) {
            result++;
        }
    }
    return result;
};
