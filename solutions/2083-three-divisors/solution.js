/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    var x=0;
    for (let i=1;i<=n;i++){
        if(n%i==0){
               x++;
               
        }
    }
    if(x==3){
        return true;
    }else{
        return false;
    }
};
