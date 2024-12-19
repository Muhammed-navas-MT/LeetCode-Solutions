/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let result = []; 
    let balance = 0; 
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i]==="R"){
            balance++;
        }else{
            balance--
        }
        if (balance === 0) {
            console.log(s.slice(start,i+1))
            result.push(s.slice(start, i + 1)); 
            start = i + 1;              
        }
    } 
    return result.length;
};
