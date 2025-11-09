/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let result = check(num1,num2);
    return result;
};

function check(num1,num2,count = 0){
    if(num1<=0 || num2<=0)return count;
    if(num1 >= num2){
        return check(num1-num2,num2,count+1);
    }else{
        return check(num1,num2-num1,count+1);
    }
};
