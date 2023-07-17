function findOutlier(integers) {
    let odd = []
    let even = []
    for (let i in integers) {
        if (integers[i] % 2 === 0) even.push(integers[i])
        else odd.push(integers[i])
    }
    return odd.length > even.length ? +even.join() : +odd.join()
}


console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([1, 1, 0, 1, 1]));