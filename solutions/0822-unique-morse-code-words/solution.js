/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let out = []
    
    const arr= [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
for(let i=0;i<words.length;i++){
    let val = []
    let v=word = words[i];
    for(let item of word){
        let index = alphabet.findIndex(char => char === item);
        val.push(arr[index])
    };
    out.push(val.join(""))
}
let unique = new Set(out)
return unique.size
};
