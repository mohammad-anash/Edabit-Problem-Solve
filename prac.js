// 1 => Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  return [minNumber, maxNumber];
}

// console.log(minMax([1, 2, 3, 4, 5])); //  [1, 5]
// console.log(minMax([2334454, 5])); //  [5, 2334454]
// console.log(minMax([1])); //  [1, 1]

// 2 => When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let totalResistance = 0;

  arr.forEach((element) => {
    totalResistance += element;
  });

  return `${totalResistance} ohms`
}

console.log(seriesResistance([1, 5, 6, 3])); //  "15 ohms"
console.log(seriesResistance([16, 3.5, 6])); //  "25.5 ohms"
console.log(seriesResistance([0.5, 0.5])); //  "1.0 ohm"
