/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b);
  let n = arr.length;
  let trimCount = Math.floor(n *0.05);
  console.log(trimCount);
  let array = arr.slice(trimCount,n-trimCount);

  let sum = array.reduce((acc,val)=>{
    return acc + val
  },0)

return sum/array.length;


};
