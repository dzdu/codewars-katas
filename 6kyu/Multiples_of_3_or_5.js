//Multiples of 3 or 5
function solution(number) {
    let result = []
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result.push(i);
        }
    }
    if (result.length >= 1) return result.reduce((a, b) => a + b)
    else return 0
}