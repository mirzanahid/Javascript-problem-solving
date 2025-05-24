//Problem-1: Write a function that takes a string and returns the reversed version.
// input and output
//reverseString("hello"); // "olleh"

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString('hello'))

// Problem-2: Check if a string is a palindrome (reads the same backward).
//input and output
//isPalindrome("racecar"); // true

function palindrome(str) {
  return str === str.split("").reverse().join("");
}
// console.log( palindrome('madamd'))

//problem-3: Print numbers from 1 to 100. For multiples of 3, print “Fizz”; for 5, “Buzz”; for both, “FizzBuzz”.

for (let i = 1; i < 100; i++) {
  let result = "";
  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";
  // console.log(result || i)
}

//problem-4: Remove Duplicates from Array
//input and output
// removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]

function removeDuplicate(arr) {
  const unqiqueArray = [...new Set(arr)];
  return unqiqueArray;
}

// console.log(removeDuplicate([1,2,3,3,3]))

//problem-5: Count Character Occurrences
//input and output
// countCharacters("hello"); // { h:1, e:1, l:2, o:1 }
//Alter: 1
function characterCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    if (!result.hasOwnProperty(str[i])) result[`${str[i]}`] = 1;
    else result[`${str[i]}`] += 1;
  }
  return result;
}

// console.log( characterCount('hello mr. nahid'))

// Alter:2

function characterCounts(str) {
  let result = {};

  for (let char of str) {
    if (result[char] == " ") {
      continue;
    }
    console.log(result[char]);
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

// console.log( characterCounts('hello nahid'))

// Problem 6: Find Max in Array
//input and output
// findMax([1, 99, 3, 7]); // 99

function findMax(arr) {
  return Math.max(...arr);
}

// console.log(findMax([1,5,9,4,0,500]))

//problem-7: Factorial of a Number
// factorial(5); // 120

function factorial(n) {
  if (n <= 1) return 1;
  console.log(n);
  return n * factorial(n - 1);
}

// console.log(factorial(5))

// Problem 8: Capitalize First Letter of Each Word
// /input and output
// capitalizeWords("hello world"); // "Hello World"

function capitalizeWords(str) {
  return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1));
}

// console.log(capitalizeWords("hello world"));

// Problem 9: Check if Two Strings are Anagrams

function areAnagrams(str1, str2){
    const sortStr=str=>str.split('').sort().join('')
    return str1.length === str2.length && sortStr(str1)=== sortStr(str2)
}
// console.log(areAnagrams("listen", "silent"))

// Problem 10: Flatten a Nested Array
//input and output
// flattenArray([1, [2, [3, 4], 5]]); // [1, 2, 3, 4, 5]


function flattenArray(arr){
    return arr.flat(Infinity)
}

// console.log(flattenArray([1,2,3,[4,5,6,[7,8,[10,9,100]]]]))


// Problem 11: Sum of All Numbers in an Array Using reduce()
//input and output
// sumArray([1, 2, 3, 4]); // 10

function sumALlNumbers(arr){
    return arr.reduce((acc,curr) => acc+curr,0)
}
// console.log(sumALlNumbers([1,2,3,4,5,6,7,8,9]))
