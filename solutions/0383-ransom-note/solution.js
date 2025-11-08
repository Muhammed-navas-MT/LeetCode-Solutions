/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m = magazine.split("");
    let r = ransomNote.split("");
    for(let i=0;i<r.length;i++){
        for(let j=0;j<m.length;j++){
            if(r[i] === m[j]){
                m.splice(j,1);
                r.splice(i,1);
                i--;
                break;
            }
        }
    };
    console.log(r)
    if(r.length)return false;
    return true;
};
