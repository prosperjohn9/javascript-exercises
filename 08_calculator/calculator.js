const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function (numbers) {
  if (numbers == 0) {
    return 1;
  } else {
    return numbers * factorial(numbers - 1);
  }
};

add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);
multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(4, 3);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
