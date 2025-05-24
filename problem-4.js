// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

//example
//# For sequence = [ 1, 3, 2, 1], the output should be almostincreasingSequence(sequence) = false;

//* There is no one element in this array that can be removed in order to get a strictly increasing sequence.

//## For sequence = [ 1, 2, 3], the output should be almostincreasingSequence(sequence) = true;

// * You can remove 3 from the array to get a strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]

function almostincreasingSequence(sequence) {
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] < sequence[i-1] ) {
      return false;
    }
  }
  return true;
}

const sequence = [1,2,3,5,6,9]
// console.log(almostincreasingSequence(sequence))
