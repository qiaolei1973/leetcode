const swap = (list,a,b) => {
    const x = list[a];
    const y = list[b];
    list[a] = y;
    list[b] = x;
}

var sortColors = function(nums) {
    let zero = -1;
    let two = nums.length;
    for(let i = 0;i < two;){
        const num = nums[i];
        if(num === 1)
            i++;
        else if(num === 2)
            swap(nums, i, --two);
        else
            swap(nums, i++, ++zero)
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]));