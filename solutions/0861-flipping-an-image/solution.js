/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let images = [];
    for(let val of image){
        let arr = [];
        let img = val.reverse();
        for(let i=0;i<img.length;i++){
            if(img[i] === 1){
                img[i] = 0
                // arr.push(0)
            }else{
                // arr.push(1);
                img[i] = 1
            }
        };
        images.push(img)
    };
    return images
};
