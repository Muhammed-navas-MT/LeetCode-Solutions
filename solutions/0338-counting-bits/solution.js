/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

const arr = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        arr[i] = arr[i >> 1] + (i & 1);
    }
    return arr;
};
