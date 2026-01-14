/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    const arr = num.toString().split("");
    for(let val of arr){
        if(num  % +val == 0){
            count++
        }
    };
    return count;
};
