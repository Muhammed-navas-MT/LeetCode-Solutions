/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let upper = s.toUpperCase();
    let count =0;
    for(let i=0;i<upper.length-1;i++){
        if(upper[i]!=upper[i+1]){
            count++
        }
    }
    return count;
};
