/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {};
    for(let val of s){
        count[val] = (count[val] || 0) + 1;
    };

    let length = 0;
    let odd = false;

    // for(let key in count){
    //     if(count[key] % 2 === 0){
    //         length = length + count[key];
    //     }else if(count[key] % 2 !== 0 && !odd){
    //         length  = length + count[key];
    //         odd = true
    //     }
    // };
    for (let key in count) {
        length += Math.floor(count[key] / 2) * 2;
        if (count[key] % 2 === 1) {
            odd = true;
        }
    }
    if (odd) {
        length += 1;
    }
    return length;
    
};
