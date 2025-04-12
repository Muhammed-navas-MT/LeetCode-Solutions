function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
let arr: boolean[] = [];
let kids:number = Math.max(...candies)
for(let i:number = 0;i<candies.length;i++){
    let sum:number = candies[i] + extraCandies;
    if(sum>=kids){
        arr.push(true)
    }else{
        arr.push(false)
    }
}
    return arr
};
