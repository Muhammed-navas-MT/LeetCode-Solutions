/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
   let arr = [];
   for(let i =0;i<operations.length;i++){
     let op = operations[i];
    if (!isNaN(op)) {
        arr.push(parseFloat(operations[i]));
    }else if(operations[i] === "D"){
        arr.push(arr[arr.length-1]*2)
    }else if(operations[i] === "+"){
        arr.push(arr[arr.length-1]+arr[arr.length-2]);
    }else if(operations[i] === "C"){
        arr.pop()
    }
   };
   return arr.reduce((a,b)=> a+b,0)
};
