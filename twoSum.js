/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let indexs;
/** 
 * 使用对撞指针+索引数组的解法
*/
const partition = (nums, l, r) => {
    let i = l + 1;
    let j = l;
    while (i <= r) {
        const num = nums[i];
        if (num < nums[l]) {
            swap(nums, ++j, i);
            swap(indexs, j, i);
        }
        i++;
    }
    swap(nums, l, j);
    swap(indexs, l, j);
    return j;
}

const swap = (list, a, b) => {
    const x = list[a];
    const y = list[b];
    list[a] = y;
    list[b] = x;
}

const __sort = (nums, l, r) => {
    if (l >= r) return;
    const pivot = partition(nums, l, r);
    __sort(nums, l, pivot - 1);
    __sort(nums, pivot + 1, r);
}

const quickSort = (nums) => {
    __sort(nums, 0, nums.length);
};

var twoSumSort = function (numbers, target) {
    let head = 0;
    let tile = numbers.length - 1;
    while (head < tile) {
        const sum = numbers[head] + numbers[tile];
        if (sum === target)
            return [head, tile];
        else if (sum > target)
            tile--;
        else
            head++;
    }
    return null;
};

var twoSum = function (nums, target) {
    indexs = nums.map((num, index) => index);
    quickSort(nums);
    const [i1, i2] = twoSumSort(nums, target);
    return [indexs[i1], index[i2]];
};

/**
 * 使用js对象的解法
 */
var twoSum = function (nums, target) {
    const dict = {};
    const len = nums.length;
    let item = nums.shift();

    for (let i = 0; i < len; i++) {
        if (dict.hasOwnProperty(target - item))
            return [dict[target - item], i];
        else
            dict[item] = i;
        item = nums.shift();
    }
    return null;
}


console.log(twoSum([13, 7, 3, 2], 9));