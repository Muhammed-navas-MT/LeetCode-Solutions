/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr =[]
    let kids = Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        let sum = candies[i]+extraCandies
        if(sum>=kids){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }
    return arr
};
