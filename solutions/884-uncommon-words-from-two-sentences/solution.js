/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words = (s1 + " " + s2).split(" ");
    let freq = {};

    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    let result = [];

    for (let word in freq) {
        if (freq[word] === 1) {
            result.push(word);
        }
    }

    return result;
};
