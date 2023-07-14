//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    number = numbers.sort((a, b) => a - b);
    return number[0] + number[1];
};
