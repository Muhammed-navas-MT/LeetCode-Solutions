/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let array =[];
    let arr = s.split(" ");
    console.log(arr)
    console.log(typeof(arr[0]));
    for(let i =0; i<arr.length;i++){
        let arr1 = arr[i]
        for(let j = 0;j<arr1.length;j++){
            if(arr1[j]==1){
                array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==2){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==3){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==4){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==5){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==6){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==7){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==8){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==9){
                 array.push(Number(arr[i]));
                j=Infinity;
            }else if(arr1[j]==0){
                 array.push(Number(arr[i]));
                j=Infinity;
            }
        }
    }
    console.log(array)
    for(let k = 0;k<array.length-1;k++){
        if(array[k]>=array[k+1]){
            return false
        }
    }

    return true
};
