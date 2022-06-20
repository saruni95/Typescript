var exports = {};

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  /* if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  } */

  //EXAMPLE 1
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
const printResult = true;
let resultPhrase = "Result is: ";

//console.log(typeof number1);

//const result = add(number1, number2, printResult);
//console.log(result);

add(number1, number2, printResult, resultPhrase);

//EXAMPLE 2
/* const person: {
  // {} the empty curly braces mean the same as an object, we have to fill them
  name: string;
  age: number;
} = { */
const person = {
  name: "Sara",
  age: 26,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // console.log(hobby.map()); // ERROR!!
}
