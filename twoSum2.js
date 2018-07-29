/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let head = 0;
    let tile = numbers.length - 1;
    while(head < tile){
        const sum = numbers[head] + numbers[tile];
        if(sum === target)
            return [head + 1, tile + 1];
        else if(sum > target)
            tile--;
        else
            head++;
    }
    return null;
};