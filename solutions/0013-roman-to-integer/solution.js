/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let arr = [];
    let ss = s.split("");

    for (let i = 0; i < ss.length; i++) {
        arr.push(
            ss[i] === "I" ? 1 :
            ss[i] === "V" ? (ss[i - 1] === "I" ? 3 : 5) :
            ss[i] === "X" ? (ss[i - 1] === "I" ? 8 : 10) :
            ss[i] === "L" ? (ss[i - 1] === "X" ? 30 : 50) :
            ss[i] === "C" ? (ss[i - 1] === "X" ? 80 : 100) :
            ss[i] === "D" ? (ss[i - 1] === "C" ? 300 : 500) :
            ss[i] === "M" ? (ss[i - 1] === "C" ? 800 : 1000) : 0
        );
    }

    console.log(arr);  // Optional: Log the array for debugging

    // Reduce the array to sum up the values
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum;
};

