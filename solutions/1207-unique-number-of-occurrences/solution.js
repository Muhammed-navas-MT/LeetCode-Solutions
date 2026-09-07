/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   let obj = {};
   for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
   };
   const values = new Set(Object.values(obj));
   return values.size === Object.values(obj).length;

};
