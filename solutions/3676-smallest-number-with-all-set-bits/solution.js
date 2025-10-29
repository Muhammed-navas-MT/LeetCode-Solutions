/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
  let result = 1;
  while(result < n){
    result = result * 2 + 1;
  };
  return result;
};
