function duplicateCount(text) {
    let c = {}
    for (let i of text.toLowerCase()) {
        c[i] = (c[i] || 0) + 1
    }
    return Object.values(c).filter(el => el > 1).length
}
console.log(duplicateCount("abcdea"))
console.log(duplicateCount(""))
console.log(duplicateCount("Indivisibilities"))
console.log(duplicateCount("abcdeaab"))
