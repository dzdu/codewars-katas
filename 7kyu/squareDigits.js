//Square Every Digit
function squareDigits(num) {
    return parseInt(num.toString().split("").map(el => el * el).join(""))
}