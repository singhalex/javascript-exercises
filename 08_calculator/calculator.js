const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
	
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
	
};

const sum = function(numbers) {
	let totalSum = 0;

  for (number of numbers) {
    totalSum += number;
  };

  return totalSum
};

const multiply = function(numbers) {
  let totalMultiplied = 1;
  for (number of numbers) {
    totalMultiplied *= number;  
  }

  return totalMultiplied
};

const power = function(firstNumber, secondNumber) {
  return firstNumber ** secondNumber	
};

const factorial = function(number) {
  let totalFactorial = 1;
  for (let i = 1; i <= number; i++) {
    totalFactorial *= i;
  }

  return totalFactorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
