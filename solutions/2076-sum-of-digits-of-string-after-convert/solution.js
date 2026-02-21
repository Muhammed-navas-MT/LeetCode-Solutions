/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let nums = "";
    let value = "";
    for(let i=0;i<s.length;i++){
        nums+=`${s.charCodeAt(i)-96}`;
    };
    
    for(let i=1;i<=k;i++){
        let arr = nums.split("");
        value = arr.reduce((acc,val)=>{
            return acc+ +val;
        },0);
        if(k !== i){
            nums = `${value}`
        }
    };
    return +value;
};
