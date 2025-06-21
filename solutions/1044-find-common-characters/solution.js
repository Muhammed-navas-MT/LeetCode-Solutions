/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];
    let firstWord = words[0];

    for (let char of firstWord) {
        let isCommon = true;
        for (let i = 1; i < words.length; i++) {
            if (!words[i].includes(char)) {
                isCommon = false;
                break;
            }
        }
        if (isCommon) {
            result.push(char);
            for (let i = 0; i < words.length; i++) {
                let index = words[i].indexOf(char);
                words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
            }
        }
    }

    return result;
}
