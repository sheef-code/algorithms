// Given a sequence of integers as an array,
// determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Example
// For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false;
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.
// For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.
// You can remove 3 from the array to get the strictly increasing sequence [1, 2].
// Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(sequence: number[]): boolean {
  let check = 0;
  function split(seq: number[]) {
    for (let i = 0; i < seq.length - 1; i++) {
      if (seq[i] < seq[i + 1]) {
        continue;
      } else {
        return;
      }
    }
    check++;
  }
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] < sequence[i + 1]) continue;
    else {
      let seq1 = sequence.slice();
      seq1.splice(i, 1);
      split(seq1);
      let seq2 = sequence.slice();
      seq2.splice(i + 1, 1);
      split(seq2);
      break;
    }
  }
  return check >= 1 ? true : false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
