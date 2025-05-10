/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let nums = [];
    for(let val of sentences){
        let arr = val.split(" ");
        nums.push(arr.length);
    };
    return Math.max(...nums);
};
