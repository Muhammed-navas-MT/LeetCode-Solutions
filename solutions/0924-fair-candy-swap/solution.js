/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let asum = aliceSizes.reduce((acc,val)=>acc+val);
    let bsum = bobSizes.reduce((acc,val)=>acc+val);
    let diff = (bsum - asum) /2;
    console.log(diff)
    let bobSet = new Set(bobSizes);

    for(let x of aliceSizes){
        let y = x + diff;
        console.log("y " + y + "    x  " + x); 
        if(bobSet.has(y)){
            return [x,y];
        }
    }
};
