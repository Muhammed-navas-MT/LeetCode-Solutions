/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

let sorted = [...score].sort((a,b)=>b-a);
let arr1 = [];
let arr2 = [];

for(let i=0;i<score.length;i++){
    arr1.push(sorted.indexOf(score[i]));
};

for(let i=0;i<arr1.length;i++){
    if(arr1[i] === 0){
        arr2.push("Gold Medal")
    }else if(arr1[i] === 1){
        arr2.push("Silver Medal")
    }else if(arr1[i] === 2){
        arr2.push("Bronze Medal")
    }else{
        arr2.push((arr1[i]+1).toString())
    }
}
return arr2
};
