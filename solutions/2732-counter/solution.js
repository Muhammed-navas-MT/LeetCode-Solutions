/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let i = 0;
    return function() {
      let r = n +i;
      i++;
      return r;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
