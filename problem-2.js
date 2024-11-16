//1.Write a function that returns the sum of two numbers.
//2.Write a function that returns the sum of all numbers regardless of # of params.

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

//solution-1:

function sum(param1, param2) {
  return param1 + param2;
}

//solutin-2:

function add(...param1) {
  let sum = 0;
  param1.forEach((element) => {
    sum += element;
  });
  return sum;
}
