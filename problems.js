//problem-1 : Reverse a String

function reverseString(str){
     return str.split('').reverse().join('')
}

// console.log(reverseString("input"))


//problem-2: Check if "madam" is a palindrome.

function isPalindrome(str){
     return str === str.split('').reverse().join('')
}

// console.log(isPalindrome('madam'))

//problem-3: First Non-Repeating Character
// From "aabccdeff", return 'b'

function firstUniqueCharacter(str){
     for (let char of str)
         if(str.indexOf(char) === str.lastIndexOf(char)){
          return char
         }
         return null
}

// console.log(firstUniqueCharacter('sadfgfasdf'))


//problem-4: Flatten a Nested Array
//[1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

function flattenArray(arr){
     return arr.flat(Infinity)
}

// console.log(flattenArray([1, [2, [3, 4]], 5]))

//problem-5: Prevent a function from firing too often.
// / Debounce Function

 function debounce (fn,delay=300){
     let timerId
     return function(...args){
          clearTimeout(timerId)
          timerId = setTimeout(()=>{
               fn.apply(this,args)
          },delay)
     }
 }


 //problem-6: Clone an object deeply.

//  function 


//problem-7: Check if Two Arrays Are Equal

function arraysEqual(a,b){
 return a.length === b.length && a.every((v,i)=>v===b[i])
}

// console.log( arraysEqual([1,2,3], [1,2,3]))

//problem-8: Remove Duplicates from Array

function removeDuplicate(arr){
     return [...new Set(arr)]
}


// console.log(removeDuplicate([1,1,2,2,3,4,5]))
