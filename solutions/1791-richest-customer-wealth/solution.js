/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr = [];
    for(let val of accounts){
        arr.push(val.reduce((acc,v)=>{
            return acc + v
        },0));
    };
    return Math.max(...arr)
};
