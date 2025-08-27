/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;
    console.log(bits.length)
    while(i <bits.length-1){
        if(bits[i] === 1){
            i = i+2;
        }else{
            i = i+1;
        }
    };
    return i === bits.length-1;
};
