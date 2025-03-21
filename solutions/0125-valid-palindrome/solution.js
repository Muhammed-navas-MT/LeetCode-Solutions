/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lower = s.toLowerCase();
   let cleanText = lower.replace(/[^a-zA-Z0-9]/g, '');
   let reverseText = cleanText.split("").reverse().join("");
   console.log(reverseText);
   
   return cleanText === reverseText;
};
