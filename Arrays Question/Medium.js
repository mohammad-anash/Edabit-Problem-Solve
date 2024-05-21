// 1 => How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
const countTrue = (arr) => {
  return arr.filter((BooleanValue) => BooleanValue === true);
};

// console.log(countTrue([true, false, false, true, false])); //  2
// console.log(countTrue([false, false, false, false])); //  0
// console.log(countTrue([])); //  0

// 2 => Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

function toArray(obj) {
  let storeObj = [];
  for (const value in obj) {
    let keys = obj[value];
    storeObj.push([value, keys]);
  }
  return storeObj;
}

// console.log(toArray({ a: 1, b: 2 })); //  [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 })); //  [["shrimp", 15], ["tots", 12]]
// console.log(toArray({})); //  []

// 3 => Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples;

function concat() {
  return [...arguments].flat();
}

// console.log(concat([1, 2, 3], [4, 5], [6, 7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4])); //  [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4])); //  [4, 4, 4, 4, 4]

//  4 => Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples;
// console.log(changeEnough([2, 100, 0, 0], 14.11)); //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75)); //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55)); //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85)); //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99)); //  false

// 5 => Array of multiple

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples

function arrayOfMultiples(a, b) {
  let store = [];

  for (let i = 1; i <= b; i++) {
    store.push(i * b);
  }
  return store;
}

// console.log(arrayOfMultiples(7, 5)); //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); //  [17, 34, 51, 68, 85, 102]

// Other Approch

function arrayOfMultiples(a, b) {
  return Array.from({ length: b }).reduce((store, current, index) => {
    store.push((index + 1) * a);
    return store;
  }, []);
}

// console.log(arrayOfMultiples(7, 5));

// 6 => Write a function that converts an object into an array of keys and values.

// Examples;

function objectToArray(arr) {
  const getValues = Object.values(arr);
  const getKeys = Object.keys(arr);
  const result = [];

  for (let i = 0; i < getKeys.length; i++) {
    result.push([getKeys[i], getValues[i]]);
  }
  return result;
}

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// );

// //  [["D", 1], ["B", 2], ["C", 3]]

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// );
// //  [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Other Approch

function objectToArray(arr) {
  const getValues = Object.values(arr);
  const getKeys = Object.keys(arr);

  return getValues.map((val, index) => [getKeys[index], getValues[index]]);
}

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// );

// //  [["D", 1], ["B", 2], ["C", 3]]

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// );
// //  [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 7 => I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

function flatten(arr) {
  let arr2 = [];
  arr.forEach((element) => {
    element.map((element) => arr2.push(element));
  });
  return arr2;
}
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// console.log(
//   flatten([
//     [1, 2],
//     [3, 4],
//   ])
// ); //  []
// // Expected: [1, 2, 3, 4]

// console.log(
//   flatten([
//     ["a", "b"],
//     ["c", "d"],
//   ])
// ); //  []
// // Expected: ["a", "b", "c", "d"]

// console.log(
//   flatten([
//     [true, false],
//     [false, false],
//   ])
// ); //  []
// // Expected: [true, false, false, false]

// 8 => find the second largst Number

function secondLargest(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}

// console.log(secondLargest([10, 40, 30, 20, 50])); //  40
// console.log(secondLargest([25, 143, 89, 13, 105])); //  105
// console.log(secondLargest([54, 23, 11, 17, 10])); //  23

// Other Approch

function secondLargest(arr) {
  arr = arr.sort((a, b) => a - b);
  const maxValue = Math.max(...arr);
  const findIndex = arr.indexOf(maxValue);
  return arr[findIndex - 1];
}

// console.log(secondLargest([10, 40, 30, 20, 50])); //  40
// console.log(secondLargest([25, 143, 89, 13, 105])); //  105
// console.log(secondLargest([54, 23, 11, 17, 10])); //  23

// 8 => Clone an Array

// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples

function clone(nums) {
  const cloneArr = nums;
  return cloneArr;
}

// console.log(clone([1, 1])); //  [1, 1, [1, 1]]
// console.log(clone([1, 2, 3])); //  [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"])); //  ["x", "y", ["x", "y"]]

