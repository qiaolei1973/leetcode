/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partition = (nums, l, r) => {
    let i = l + 1;
    let j = l;
    while (i <= r) {
        const num = nums[i];
        if (num < nums[l]) {
            swap(nums, ++j, i);
        }
        i++;
    }
    swap(nums, l, j);
    return j;
}

const swap = (list, a, b) => {
    const x = list[a];
    const y = list[b];
    list[a] = y;
    list[b] = x;
}

const find = (nums, k, l, r) => {
    const pivot = partition(nums, l, r);
    const rank = r - pivot + 1;
    if (k === rank) return nums[pivot];
    else if (k < rank) return find(nums, k, pivot + 1, r);
    else return find(nums, k - rank, l, pivot - 1);
}

var findKthLargest = function (nums, k) {
    return find(nums, k, 0, nums.length - 1);
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));