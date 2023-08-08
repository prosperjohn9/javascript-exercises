function roundToOneDecimalPlace(value) {
  return Number(value.toFixed(1));
}
const convertToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return roundToOneDecimalPlace(celsius);
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = (celsius * (9 / 5) + 32);
  return roundToOneDecimalPlace(fahrenheit);
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
