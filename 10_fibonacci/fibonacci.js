const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    };
    number = Number(number);
    let fibonacciSequence = [1, 1];
    for (let i = 1; i <= number; i++) {
        sum.push(sum[i] + sum[i-1]);
    }

    return fibonacciSequence[number-1];

};

// Do not edit below this line
module.exports = fibonacci;
