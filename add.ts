// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// Example
// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

function add(param1: number, param2: number): number {
  return param1 + param2;
}

function add2(...param1: number[]): number {
  // using rest operator
  let total = 0;
  param1.forEach(num => {
    total += num;
  });
  return total;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
