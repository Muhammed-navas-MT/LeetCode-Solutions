/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    if(s.trim() === "")return 0;
    const arr = s.trim().split(" ");
    for(let val of arr){
        if(val.trim() !== ""){
               count++
        }
    }
    return count
};
