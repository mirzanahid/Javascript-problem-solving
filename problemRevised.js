//problem-1: Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString('hello'))

//problem-2: Check Palindrome

function palindrome(str) {
  return str === str.split("").reverse().join("");
}
// console.log(palindrome('madafdm'))

//problem-3: First not-repeating character
function firstUniqueCharacter(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}
// console.log(firstUniqueCharacter("aaafsdfsafsdx"));

//problem-4: Flatten a Nested Array

function flattenNestedArray(arr){
    return arr.flat(Infinity)
}
// console.log(flattenNestedArray([1, [2, [3, 4]], 5]))

//problem-5: Debounce Function

function debounce(fn, delay=300){
          let timerId 
    return function(...args){
        clearTimeout( timerId)
        timerId = setTimeout(()=>{
            fn.apply(this,args)
        }, delay)
    }
}


