/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let arr =[];
    for(let i=0;i<prices.length;i++){
        let num ="0";
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]>=prices[j]){
                num = prices[i]-prices[j];
                break
            }
        }
        if(num !== "0"){
            arr.push(num)
        }else{
            arr.push(prices[i])
        }
    }
    console.log(arr)
    return arr
};
