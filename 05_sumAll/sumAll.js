const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (firstNumber < 0 || secondNumber < 0 || typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        return "ERROR"
    }

    if (firstNumber > secondNumber) {
        start = secondNumber;
        end = firstNumber;
    } else {
        start = firstNumber;
        end = secondNumber;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum
};


// Do not edit below this line
module.exports = sumAll;
