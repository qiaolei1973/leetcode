var isPalindrome = function (s) {
    const arr = s.split('');
    const reg = /[a-z0-9]/
    let head = 0;
    let tile = arr.length - 1;
    while (head < tile) {
        const sh = arr[head].toLocaleLowerCase();
        const st = arr[tile].toLocaleLowerCase();
        if (!reg.test(sh)) {
            head++;
            continue;
        } else if (!reg.test(st)) {
            tile--;
            continue;
        } else if (sh !== st) {
            return false;
        } else {
            tile--;
            head++;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));