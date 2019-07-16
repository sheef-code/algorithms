// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For picture = ["abc", "ded"]
// the output should be
// addBorder(picture) = ["*****", "*abc*", "*ded*", "*****"]

function addBorder(picture: string[]): any {
  let borderLine = "*".repeat(picture[0].length + 2);
  return [
    borderLine,
    ...picture.map((value: string): string => "*" + value + "*"),
    borderLine
  ];
}

console.log(addBorder(["abc", "ded"]));
