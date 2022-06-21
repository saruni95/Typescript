//EXAMPLE 1
function add1(n1: number, n2: number, showResult: boolean, phrase: string) {
  /* if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  } */
  const result = n1 + n2; //To make the result only a number
  if (showResult) {
    console.log(phrase + result); //If we use phrase + n1 + n2 the result is a String
  } else {
    //If showResult = false -> return n1 + n2
    return n1 + n2;
  }
}

let number1: number; // 5.0
number1 = 5;

const number2 = 2.8;
const printResult1 = true;
let resultPhrase = "Result is: ";

//console.log(typeof number1);

//const result = add(number1, number2, printResult);
//console.log(result);

add1(number1, number2, printResult1, resultPhrase);
