var userInput; // string | number
var userName;
userInput = 5;
userInput = "Sara";
if (typeof userInput === "string") {
    //Condition to use unknwown
    userName = userInput;
}
//string is not "unknown" but it works if it is "any"
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 500);
console.log(result);
