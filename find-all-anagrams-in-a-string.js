/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    const ret = [];
    const len = s.length;
    const size = p.length;
    if (s.length === 0) return ret;
    const freq = {};
    let left = 0, right = 0, cnt = p.length;
    for (item of p) {
        if (freq[item])
            freq[item]++;
        else
            freq[item] = 1
    }
    while (right < len) {
        if (freq[s.charAt(right++)] !== undefined && freq[s.charAt(right - 1)]-- > 0)
            cnt--;
        if (cnt === 0)
            ret.push(left);
        if (right - left === size && freq[s.charAt(left++)] !== undefined && freq[s.charAt(left - 1)]++ >= 0) {
            cnt++;
        }
    }
    return ret;
};

console.log(findAnagrams("cbaebabacd", "abc"));