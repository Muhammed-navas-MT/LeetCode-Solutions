/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
      let s1 = s.split("");
    for(let i=0;i<s1.length;i++){
        let val = s1.shift();
        s1.push(val);
        let a = s1.join("");
        if(a === goal){
            return true;
        }
    };
    return false
};
