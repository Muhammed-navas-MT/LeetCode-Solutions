/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ss= s.trim();
    let arr = ss.split(" ");
    let str = arr[arr.length-1]
    return str.length
};
