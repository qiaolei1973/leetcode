/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.replace(/[\s]+/g,' ').split(' ').reverse().join(' ').trim();
};