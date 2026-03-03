/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const obj1 = {};
    const obj2 = {};
    const vowels = ['a','e','i','o','u'];

    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        }else{
            obj2[s[i]] = (obj2[s[i]] || 0) + 1;
        }
    }

    let sumOfObj1 = 0;
    let sumOfObj2 = 0;
    if(Object.keys(obj1).length !==0){
        sumOfObj1= Math.max(...Object.values(obj1));
    }
    if(Object.keys(obj2).length !==0){
        sumOfObj2= Math.max(...Object.values(obj2));
    }
   return sumOfObj1 + sumOfObj2
};
