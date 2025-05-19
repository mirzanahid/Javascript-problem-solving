//problem-1: find max number
function findMax(arr) {
  return Math.max(...arr);
}

// console.log(findMax([1,5,10,100,105]))

//prbolme-2: Count Vowels in a String

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count =0
  for (let char of str) {
    if (vowels.includes(char)) {
        count++
    }
  }
  return count
}
// console.log(countVowels('xyz'))


