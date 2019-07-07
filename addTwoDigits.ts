// You are given a two-digit integer n. Return the sum of its digits.
// Example
// For n = 29, the output should be addTwoDigits(n) = 11.

function addTwoDigits(n: any): number {
  const nums = n.toString().split("");

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(29));
