/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr= num.split("").reverse();
    for(let i=0;i<arr.length;i++){
        if(arr[i] === "0"){
            arr.shift();
            i--;
        }else{
            return arr.reverse().join("").trim();
        }
    };

    
};
