/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    let obj1 = getObj(s);
    let obj2 = getObj(t);
    let keys = Object.keys(obj1);
    
    for(let val of keys){
        if(obj2[val]){
            if(obj1[val] !== obj2[val]){
                return false;
            }
        }else {
            return false;
        }
    };
    
   return true;
};

function getObj (str){
    let obj = {};
    for(let val of str){
        obj[val] = (obj[val] || 0) + 1;
    };
    return obj;
};
