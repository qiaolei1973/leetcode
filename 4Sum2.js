/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const record = {};
    let result = 0;
    C.forEach(itemc => {
        D.forEach(itemd => {
            if (record[itemc + itemd]) record[itemc + itemd]++;
            else record[itemc + itemd] = 1;
        });
    });
    A.forEach(itema => {
        B.forEach(itemb => {
            const num = itema + itemb;
            if (record[-num]) {
                result += record[-num];
            }
        });
    });
    return result;
};

const solution = () => {
    return fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]);
};

console.log(solution());
