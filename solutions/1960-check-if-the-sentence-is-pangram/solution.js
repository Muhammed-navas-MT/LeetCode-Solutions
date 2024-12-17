/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {


    if(!sentence == sentence.toLowerCase()){
        return false
    }
    let unique = new Set();
    
    for( let val of sentence){
        unique.add(val)
    }

    let length = unique.size;

    if(26 <= length){
        return true;
    }else{
        return false
    }

    
};
