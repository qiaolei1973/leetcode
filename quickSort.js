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

const __sort = (nums, l, r) => {
    if (l >= r) return;
    const pivot = partition(nums, l, r);
    __sort(nums, l, pivot - 1);
    __sort(nums, pivot + 1, r);
}

const quickSort = (nums) => {
    __sort(nums, 0, nums.length);
};

const arr = [2, 3, 1, 13, 4, 5, 7, 1, 7, 11, 44, 2];
quickSort(arr);
console.log(arr);