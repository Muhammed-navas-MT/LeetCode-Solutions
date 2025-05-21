/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0;
    let flag = 0;
    for(let val of s){
        if(val === "P"){
            flag =0;
        }else if(val === "A"){
            a++
            flag =0;
        }else{
            flag++;
            if(flag === 3){
                return false;
            }
        }
    };
    if(a >=2){
        return false;
    }else{
        return true
    }
};
