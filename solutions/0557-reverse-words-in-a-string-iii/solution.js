/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array =[];
    let arr = s.split(" ");

    for( val of arr){
     let re = val.split('').reverse().join('');
     array.push(re)
        
    }
    return array.join(" ")
};
