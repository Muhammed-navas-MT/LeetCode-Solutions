/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let nn=nums.map((val)=>{
        let sum=0;
         let s=val.toString().split("");
        for(let i=0;i<s.length;i++){
            let v=+s[i];
            sum=sum+v;
        }
        return sum;
    });
    let sm=nn.reduce((acc,vall)=>{
        if(acc>vall){
            acc=vall;
        };
        return acc;
    }, Infinity);

  return sm;
};
