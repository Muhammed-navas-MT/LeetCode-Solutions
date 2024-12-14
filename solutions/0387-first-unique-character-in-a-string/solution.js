/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arr = s.split("")
   const unique = arr.findIndex((val)=>{
     return arr.indexOf(val) === arr.lastIndexOf(val)
   })

  return unique
};
