/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = [0];
    for(let i=0;i<gain.length;i++){
        result.push(result[i]+gain[i]);
    };
    return Math.max(...result);
};
