/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let rtnval ="";
    for(let val of letters){
        if(val > target){
            if(!rtnval){
                rtnval = val;
            }else if(rtnval > val){
                rtnval = val
            }
        }
    };
    if(!rtnval){
        return letters[0];
    }else{
        return rtnval;
    }
};
