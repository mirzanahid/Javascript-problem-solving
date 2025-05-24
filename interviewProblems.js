// Swapping two numbers without using a third variable?

let a = 4;
let b = 5;

// a= a*b
// b= a/b
// a= a/b

// console.log(a,b)

//get number of characters in a string

//input : str= "abdce llkd"
//output: a:1,b:1, c:1, e:1, l:2, k: 1, d: 1

function numberOfChar(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    console.log(!obj.hasOwnProperty(str[i]));
    if (!obj.hasOwnProperty(str[i])) obj[`${str[i]}`] = 1;
    else obj[`${str[i]}`] += 1;
  }
  return obj;
}
// console.log(numberOfChar("nsadfsda sdfads sdfsaf")); // { n: 1, s: 6, a: 4, d: 5, f: 4 }

//Let str= “mock interview” , capitalize each word's first character.

let str = "mock interview";

let capitalize = str
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

  str = capitalize
// console.log(str);
