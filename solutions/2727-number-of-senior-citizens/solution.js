/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
     let count =0;
    for(i=0;i<details.length;i++){
        let value = details[i];
        let arr = value.split("");
        let val = arr.slice(11, 13);
        console.log(val);
        let join = val.join("")
       if(join >60){
        count ++;
       }
    }
    console.log(count);
    return count
};
