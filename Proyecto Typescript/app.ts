let userInput: unknown; // string | number
let userName: string;

userInput = 5;
userInput = "Sara";
if (typeof userInput === "string") {
  //Condition to use unknwown
  userName = userInput;
}
//string is not "unknown" but it works if it is "any"

function generateError(message: string, code: number): never {
  //never: never retur anything
  throw { message: message, errorCode: code };
  //while (true) {}
}

const result = generateError("An error occurred!", 500);
console.log(result);
