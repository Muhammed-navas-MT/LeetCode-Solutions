/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            let count = 1;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j] % 2 !== 0){
                    count++
                }else{
                    break;
                };
                 if(count === 3){
                    return true;
                }
            }
        }
    };
    return false;
};
