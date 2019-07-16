// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// Example
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString: string): string {
  let inputArray = inputString.split("");
  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "z") {
      inputArray[i] = "a";
    } else {
      inputArray[i] = String.fromCharCode(inputArray[i].charCodeAt(0) + 1);
    }
  }
  return inputArray.join("");
}

console.log(alphabeticShift("crazy"));
