/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word ==word.toLowerCase()){
            return true
        }
        if(word ==word.toUpperCase()){
            return true
        }
        let wrd= word.slice(1)
        if(wrd ==wrd.toLowerCase()){
            return true
        }
    for(let val of word){
        if(val !== val.toUpperCase()){
            return false
        }
    }
    return true
};
