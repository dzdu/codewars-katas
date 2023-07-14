//Sum of Digits / Digital Root
function digitalRoot(n) {
    let str = n.toString().split("").map(Number).reduce((sum, a) => sum + a, 0).toString().split("")
    let res = []
    if (str.length >= 2) {
        res.push(str.map(Number).reduce((sum, a) => sum + a, 0).toString().split("").map(Number).reduce((sum, a) => sum + a, 0))
    } else res.push(str)
    return +res.join("")
}