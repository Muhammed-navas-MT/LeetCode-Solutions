/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    salary = salary.filter(item => item !== max && item !== min);
    let sum = 0;
    for(let val of salary){
        sum = sum + val;
    };

    return sum/salary.length
};
