/**
 * @param {number[]} height
 * @return {number}
 */
const getArea = (width, height) => width * height;

var maxArea = function (height) {
    let head = 0;
    let tile = height.length - 1;
    let max = 0;
    while (head < tile) {
        const h = height[head];
        const t = height[tile];
        const currentHeight = Math.min(h, t);
        const width = tile - head;
        const area = getArea(width, currentHeight);
        if (area > max)
            max = area;
        if (h > t)
            tile--;
        else
            head++;
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));