// Given a sorted array of integers a, find an integer x from a such that the value of
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value). If there are several possible answers, output the smallest one.
// Example
// For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.
// For a = [2, 4, 7, 6], the output should be absoluteValuesSumMinimization(a) = 4.
// For a = [2, 4, 7, 6, 6], the output should be absoluteValuesSumMinimization(a) = 6.
// For a = [2, 4, 7, 6, 6, 8], the output should be absoluteValuesSumMinimization(a) = 6.

function absoluteValuesSumMinimization(a: number[]): number {
  let meanVal = a.reduce((a, b) => a + b) / a.length;
  console.log(meanVal);
  return a.reduce((prev, currVal) =>
    Math.abs(prev - meanVal) < Math.abs(currVal - meanVal) ? prev : currVal
  );
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
