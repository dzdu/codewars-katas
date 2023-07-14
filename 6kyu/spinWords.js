//Stop gninnipS My sdroW!
function spinWords(string) {
    let stra = string.split(" ")
    let res = []

    stra.forEach(el => {
        el.length >= 5 ? res.push(el.split("").reverse().join("")) : res.push(el)
    })
    return res.join(" ")
}