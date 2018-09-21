var minWindow = function (s, t) {
    const len = s.length;
    const size = t.length;
    if (size > len) return "";
    let ret = null;
    let flag = true;
    if (s.length === 0) return ret;
    const freq = {};
    let left = 0, right = 0, cnt = size;
    for (item of t) {
        if (freq[item])
            freq[item]++;
        else
            freq[item] = 1
    }
    while (right < len) {
        if (cnt) {
            if (right !== len - 1 || !flag) {
                if (freq[s.charAt(right++)] !== undefined && freq[s.charAt(right - 1)]-- > 0)
                    cnt--;
            } else {
                flag = false;
                if (freq[s.charAt(right)] !== undefined && freq[s.charAt(right)]-- > 0)
                    cnt--;
            }
        }
        if (cnt === 0) {
            const newStr = s.substr(left, flag ? right - left : right - left + 1);
            ret = (ret && ret.length <= newStr.length) || (newStr === "")  ? ret : newStr;
            if (freq[s.charAt(left++)] !== undefined && freq[s.charAt(left - 1)]++ >= 0) {
                cnt++;
            }
        }


    }
    return ret || "";
};

console.log(minWindow("aa", "aa"));