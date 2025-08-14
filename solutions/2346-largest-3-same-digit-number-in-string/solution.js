/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let arr =[];
    let result = [];
    for(let i=0;i<num.length;i++){
        if(arr.length === 3){
            let str = arr.join("");
            result.push(+str);
            arr = [];
        };
        if(arr.length === 0){
            arr.push(num[i])
        }else if(+num[i] == +arr[arr.length-1]){
            arr.push(num[i])
        }else{
            arr = [];
            arr.push(num[i])
        }
        if(arr.length === 3){
            let str = arr.join("");
            result.push(+str);
            arr = [];
        };
    };
    if(result.length === 0){
        return ""
    }
    let max = Math.max(...result);
    if(max === 0){
        return "000"
    }
    return `${max}`
    
};
