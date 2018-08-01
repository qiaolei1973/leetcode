var minSubArrayLen = function (s, nums) {
    let len = nums.length;
    let i = 0;
    let j = -1;
    let sum = 0;
    let res = len + 1;
    while (i < len) {
        if (sum < s && j + 1 < len)
            sum += nums[++j];
        else
            sum -= nums[i++];
        if (sum >= s)
            res = Math.min(res, j - i + 1);
    }
    return res === len ? 0 : res;
};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]));