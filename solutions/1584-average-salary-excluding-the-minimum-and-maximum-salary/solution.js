/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    salary = salary.filter(item => item !== max && item !== min);
    console.log(salary);
    let sum = 0;
    for(let val of salary){
        sum = sum + val;
    };
    let l = salary.length
    console.log(l)
    return sum/l
};
