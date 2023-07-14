// Sum Numbers
function sum(numbers) {
    "use strict";
    if (numbers.length == 0) return 0
    else if (numbers.length == 1) return parseInt(numbers.join())
    else return numbers.reduce((a, b) => a + b)

};