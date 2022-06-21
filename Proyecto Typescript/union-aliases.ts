type Combinable = number | string; //Aliases
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //Literal values with unions vs only put string
) {
  //Union types "|"
  //Combine numbers and strings
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; //To make the result only a number (The "+" before makes it a number)
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  /* if (resultConversion === "as-number") {
    return +result; //parseFloat(result)
    console.log("hola");
  }
  return result.toString(); */
}

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("30", "26", "as-text");
console.log(combinedNames);
