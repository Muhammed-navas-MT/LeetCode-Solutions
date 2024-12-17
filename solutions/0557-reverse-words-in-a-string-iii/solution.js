/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array =[];
    let arr = s.split(" ");

    for( val of arr){
        console.log(val)
     let re = val.split('').reverse().join('');
     array.push(re)
        
    }
    console.log(array)
    return array.join(" ")
    
};
