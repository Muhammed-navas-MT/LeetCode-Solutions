/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.flatMap((word) => {
        return word.split(separator)
                   .filter((str) => str !== "");
    });
};

