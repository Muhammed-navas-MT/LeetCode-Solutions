/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var arr= address.split("");
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="."){
            arr[i]="[.]";
        }
    }
     var array=arr.join("");
    return array;
};
