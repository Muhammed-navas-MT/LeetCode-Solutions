/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;
    let leg = strs.length;
    let strLeg = strs[0].length;
    for(let i=0;i<strLeg;i++){
        for(let j=0;j<leg-1;j++){
            if(strs[j].charAt(i) > strs[j+1].charAt(i)){
                result++;
                break;
            }
        }
    };
    return result;
};
