/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let val of words){
        if(val === reverse(val)){
            return val
        }
    };
    return ""
};

function reverse(str){
    if(str.length <=1){
        return str;
    };
    return reverse(str.slice(1)) + str[0];
}
