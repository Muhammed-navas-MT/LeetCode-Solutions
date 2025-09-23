/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let months = [31,28,31,30,31,30,31,31,30,31,30,31]
    let month = date.slice(5,7);
    let day = date.slice(8,10);
    let year = date.slice(0,4);
    console.log(year)
    if(month == "01"){
        return +day;
    };

    let result = 0;
    for(let i =0;i< +month-1;i++){
        result+= months[i]
    };
    if(+year % 4 == 0 && +month >=3 && +year !== 1900){
        console.log("here")
        return result + +day + 1;
    }

    return result+ +day
};
