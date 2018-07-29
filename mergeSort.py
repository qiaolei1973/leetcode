
def merge(nums1, m, nums2, n):
    """
    :type nums1: List[int]
    :type m: int
    :type nums2: List[int]
    :type n: int
    :rtype: void Do not return anything, modify nums1 in-place instead.
     """
    i = 0
    j = 0
    while j < n:
        print j
        if nums2[j] < nums1[i]:
            nums1.insert(i, nums2[j])
            i += 2
            j += 1
        else:
            i += 1
    print nums1

merge(
    [1, 2, 3, 0, 0, 0],
    3,
    [2, 5, 6],
    3)
