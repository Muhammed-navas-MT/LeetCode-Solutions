/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evan = 0;
    let odd = 0;
    for(let i=0;i<num.length;i++){
        if(i%2 === 0){
            evan += parseFloat(num[i]);
        }else{
            odd += parseFloat(num[i]);
        }
    };
    return evan === odd;
};
