/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let arr= [];
    let output = []
    for(let val of grid){
        let arr2 = []
        for(let v of val){
            let vv = v.toString().split("");
            arr2.push(vv.length);
        };
        arr.push(arr2);
    };
    output = arr[0];
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(output[j] < arr[i][j]){
                output[j] = arr[i][j];
            }
        }
    }
    return output
    
};
