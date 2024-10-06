/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var ss=[];
    var split = s.split(" ");
    for(let i =0 ;i<k;i++){
        ss[i]=split[i];
    }
    var join = ss.join(" ");
    return join;
};
