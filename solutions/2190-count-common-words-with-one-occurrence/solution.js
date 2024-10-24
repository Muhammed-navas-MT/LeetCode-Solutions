/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count=0;
let arr1= words1.filter((value)=>{
    return words1.indexOf(value)=== words1.lastIndexOf(value);
});
let arr2= words2.filter((value)=>{
    return words2.indexOf(value)=== words2.lastIndexOf(value);
});
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            count++
        }
    }
}
 return count;   
};
