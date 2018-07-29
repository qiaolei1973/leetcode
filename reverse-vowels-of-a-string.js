const swap = (list, a, b) => {
    const x = list[a];
    const y = list[b];
    list[a] = y;
    list[b] = x;
}

var reverseVowels = function(s) {
    const reg = /[aeiouAEIOU]/;
    const arr = s.split('');
    let head = 0;
    let tile = s.length - 1;
    while(head < tile){
        if(!reg.test(arr[head]))
            head++;
        else if(!reg.test(arr[tile]))
            tile--
        else{
            swap(arr,head,tile);
            head++;
            tile--;
        }
    }
    return arr.join('');
};