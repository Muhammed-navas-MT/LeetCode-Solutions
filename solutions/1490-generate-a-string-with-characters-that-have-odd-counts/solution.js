/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let arr= [];
    for(let i=0;i<n-1;i++){
        arr.push("a")
    }
    if(n%2===0){
        arr.push("b")
    }else{
        arr.push("a")
    }
   let string =  arr.join("");
   return string;
};
