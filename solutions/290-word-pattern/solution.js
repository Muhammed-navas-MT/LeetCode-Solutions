/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let patternMap = {};

    let patternCharacters = pattern.split("");
    let words = s.split(" ");

    if (patternCharacters.length !== words.length) {
        return false;
    }

    let patternLength = patternCharacters.length;

    for (let i = 0; i < patternLength; i++) {
        if (!patternMap[patternCharacters[i]]) {
            let mappedWords = Object.values(patternMap);

            if (mappedWords.includes(words[i])) {
                return false;
            }

            patternMap[patternCharacters[i]] = words[i];
        } else {
            if (patternMap[patternCharacters[i]] != words[i]) {
                return false;
            }
        }
    }

    return true;
};
