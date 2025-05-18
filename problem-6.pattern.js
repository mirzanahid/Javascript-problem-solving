// All javascript patern problems :

// Task-1: Generate a triangle of * like this:

// **
// ***
// ****
// *****

function trianglePattern(num) {
  let triangle = "";
  for (let i = 1; i <= num; i++) {
    let star = "*";
    triangle += star.repeat(i) + "\n";
  }
  return triangle;
}

trianglePattern(5);

// Task-2:  Inverted Right-Angled Triangle

// *****
// ****
// ***
// **
// *

function invertedPattern(n) {
  let result = "";
  for (let i = n; i >= 1; i--) {
    const star = "*";
    result += star.repeat(i) + "\n";
  }
  return result;
}

console.log(invertedPattern(5));

//Task-3: Pyramid Pattern









//Task-4 : Write a program in JavaScript to print the following pattern for a given number n (rows):

// 1
// 22
// 333
// 4444
// 55555

function numberPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let st = i.toString();
    result += st.repeat(i) + "\n";
  }
  return result;
}
numberPattern(5);

//Alternative solution:

// function numPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let rows = "";
//     for (let j = 1; j <= i; j++) {
//       rows += i;
//     }
//     console.log(rows);
//   }
// }

// numPattern(5);
