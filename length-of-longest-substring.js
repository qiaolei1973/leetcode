/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let dict = {};
    let max = 0;
    const len = s.length;
    const arr = s.split('');
    let i = 0;
    for (; i < len; i++) {
        let j = i + 1;
        dict[arr[i]] = 1;
        let currentLen = 1;
        for (; j < len; j++) {
            if (dict[arr[j]]) {
                if (currentLen > max)
                    max = currentLen;
                currentLen = 0;
                dict = {};
                j = 0;
                break;
            }
            currentLen++;
            if (j === len - 1 && currentLen > max) {
                max = currentLen;
            } else {
                dict[arr[j]] = 1;
            }
        }
    }
    return max || 1;
};

console.log(lengthOfLongestSubstring("pwwkew"));