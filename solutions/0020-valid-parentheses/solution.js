/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
    for(let i=0;i<s.length;i++){
        const char = s[i];
        
        if(char === "(" || char === "[" || char === "{"){
            stack.push(char);
        }else if(char === ")" || char === "]" || char === "}"){
            if(isEmpty(stack)){
                console.log("1")
                return false;
            }
            const top = stack.pop();
            if(
                (char === ")" && top !== "(")||
                (char === "]" && top !== "[")||
                (char === "}" && top !== "{")
                ){
                    console.log("2")
                    return false;
                }
        }
    };
    console.log("3");
    console.log("stack",stack)
    return isEmpty(stack)
}

function isEmpty(stack){
    return stack.length === 0;
};
