/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = [];
    for(let j=0;j<matrix[0].length;j++){
       let arr1 = []
        for(let i=0;i<matrix.length;i++){
        arr1.push(matrix[i][j])
    }
    arr.push(arr1);
    } 
    return arr
};
