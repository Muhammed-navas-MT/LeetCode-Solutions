/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const split = s.split(" ");
    let stack = [];
    
    for(let i of split){
        stack.push((i));
    };
    
    let final = "";
    while(stack.length){
        let current = stack.pop();
        if(current){
            final += " "+ current;
        }
    };
    return final.trim();
};
