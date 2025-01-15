/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // let maxCandies = Math.max(...candies);
    // let result = candies.map(candy => candy + extraCandies >= maxCandies);
    
    // return result;
    let kids = Math.max(...candies)
    console.log(kids);
    let arr =[]
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

