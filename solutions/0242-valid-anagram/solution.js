/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let countS = {};
    let countT = {};

    for(let val of s){
        countS[val] = (countS[val] || 0) + 1;
    };
    for(let val of t){
         countT[val] = (countT[val] || 0) + 1;
    }
    for(let val of s){
        if(countS[val] !== countT[val]){
            return false;
        }else{
            delete countS[val];
            delete countT[val];
        }
    };

    if(Object.keys(countS).length === 0 && Object.keys(countT).length === 0){
        return true
    }else{
        return false;
    }
};
