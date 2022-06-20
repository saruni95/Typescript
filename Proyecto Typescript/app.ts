function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  //Union types "|"
  //Combine numbers and strings
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = input1 + input2; //To make the result only a number
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result; //parseFloat(result)
    console.log("hola");
  }
  return result.toString();
}

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("30", "26", "as-text");
console.log(combinedNames);
