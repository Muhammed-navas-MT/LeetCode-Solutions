/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let array =[];
    for(i=0;i<words.length;i++){
        let arr = words[i];
        for(j=0;j<arr.length;j++){
            if(x==arr[j]){
              array.push(i);
              break;
            }
        }
    }
    return array;
};
