function findOdd(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        count[n] = (count[n] || 0) + 1;
    }
    let res = []
    for (let n in count) {
        count[n] % 2 !== 0 ? res.push(+n) : ''
    }
    return +res.join('');
}