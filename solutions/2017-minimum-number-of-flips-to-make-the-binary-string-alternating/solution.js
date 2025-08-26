/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
        const n = s.length;
    const doubled = s + s;

    let alt1 = "", alt2 = "";
    for (let i = 0; i < 2 * n; i++) {
       alt1 = alt1 + (i % 2 === 0 ? '0' : '1');
       alt2 = alt2 + (i % 2 === 0 ? '1' : '0');
    }

    let minFlips = Infinity;
    let diff1 = 0, diff2 = 0;

    for (let i = 0; i < 2 * n; i++) {
        if (doubled[i] !== alt1[i]) diff1++;
        if (doubled[i] !== alt2[i]) diff2++;

        if (i >= n) {
            if (doubled[i - n] !== alt1[i - n]) diff1--;
            if (doubled[i - n] !== alt2[i - n]) diff2--;
        }

        if (i >= n - 1) {
            minFlips = Math.min(minFlips, diff1, diff2);
        }
    }

    return minFlips;
};
