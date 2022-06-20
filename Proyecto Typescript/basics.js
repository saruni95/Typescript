//EXAMPLE 1
function add(n1, n2, showResult, phrase) {
    /* if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Incorrect input!");
    } */
    var result = n1 + n2; //To make the result only a number
    if (showResult) {
        console.log(phrase + result); //If we use phrase + n1 + n2 the result is a String
    }
    else {
        //If showResult = false -> return n1 + n2
        return n1 + n2;
    }
}
var number1; // 5.0
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
//console.log(typeof number1);
//const result = add(number1, number2, printResult);
//console.log(result);
add(number1, number2, printResult, resultPhrase);
