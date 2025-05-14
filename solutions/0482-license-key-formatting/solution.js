/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let arr = [];
    let count = 0;
    for(let val  of s){
        if(val !== "-"){
            arr.push(val)
        }
    }

    for(let i=arr.length-1;i>0;i--){
        count++
        if(count === k){
            arr.splice(i,0,"-");
            count = 0
        }
    };
    return arr.join("").toUpperCase();
};
