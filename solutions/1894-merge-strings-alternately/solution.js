/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1= word1.split("");
    let w2= word2.split("");
    let num = Math.min(w1.length,w2.length);
    // console.log(num);
    // console.log(w1,w2);
    let arr=[];
    let arr1=[];
    for(let i =0;i<num;i++){
        arr[i]=[...w1[i],...w2[i]];
    };
    let f=arr.flat(Infinity);
    // console.log(f);

    
    if(w1.length>w2.length){
         arr1=w1.slice(num,w1.length);
    // console.log(arr1)
    }else if(w1.length<w2.length){
          arr1=w2.slice(num,w2.length);
    // console.log(arr1)
    }else{
        return f.join("");
    };
    let r= [...f,...arr1];
    return r.join("")

};
