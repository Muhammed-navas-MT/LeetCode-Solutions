/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let string = x.toString();
  let r=string.split("").reverse().join("");
if(string==r && x>=0){
    return true;
}else{
    return false;
}
};
