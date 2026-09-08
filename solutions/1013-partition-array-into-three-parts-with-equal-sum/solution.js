/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);

    if (sum % 3 !== 0) return false;

    let target = sum / 3;
    let accum = 0;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        accum += arr[i];

        if (accum === target) {
            counter++;
            accum = 0;

            // Found 2 parts, and at least one element remains
            if (counter === 2 && i < arr.length - 1) {
                return true;
            }
        }
    }

    return false;
};
