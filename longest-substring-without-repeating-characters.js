/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const freq = {};
    const len = s.length;
    let l = 0, r = -1;
    let res = 0;
    while(l < len){
        if(r + 1 < len && freq[s[r + 1]] === undefined)
            freq[s[++r]] = 1;
        else
            freq[s[l++]] = undefined;
        res = Math.max(res, r - l + 1);
    }
    return res;
};

console.log(lengthOfLongestSubstring("pwwkew"));