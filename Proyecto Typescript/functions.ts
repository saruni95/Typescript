function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //Void: function that doesn't return a value
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  //cb = callback
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));
console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number; //Arrow function two parameters that return a number. Function types
combineValues = add;
//combineValues = printResult; //The variable is now the function add
//combineValues = 5;

console.log(combineValues(8, 8));
//let someValue: undefined; //I can use "undefined" on a value but not in a function

addAndHandle(10, 20, (result) => {
  console.log(result);
  //return result; //No da error porque asume que no devolvería nada pero no que no pueda hacerlo
}); //anonimous function
