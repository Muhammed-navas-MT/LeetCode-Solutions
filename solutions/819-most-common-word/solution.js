/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let arr = paragraph.toLowerCase().replace(/[^a-z]/g," ").split(/\s+/);
    let count = {};
    let hNum = 0;
    let result = "";
    for (let key of arr) {
        if (!banned.includes(key)) {
            count[key] = (count[key] || 0) + 1;
            if(hNum < count[key]){
                hNum = count[key];
                result = key;
            }
        }
    };
    return result;
};
