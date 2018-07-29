/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0, n);
    let i = 0;
    let j = 0;
    while (j < n) {
        const num1 = nums1[i];
        const num2 = nums2[j];
        if (num1 < num2)
            i++;
        else {
            nums1.splice(i++, 0, nums2[j++]);
        }
    }
    console.log(nums1);
};

console.log(
    merge(
        [1, 2, 3, 0, 0, 0],
        3,
        [2, 5, 6],
        3)
);