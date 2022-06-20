var exports = {};
function add(n1, n2, showResult, phrase) {
    /* if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Incorrect input!");
    } */
    //EXAMPLE 1
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
//EXAMPLE 2
/* const person: {
  // {} the empty curly braces mean the same as an object, we have to fill them
  name: string;
  age: number;
} = { */
/*const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
} = {
  //Object
  name: "Sara",
  age: 26,
  hobbies: ["Sports", "Cooking"], //Array
  role: [2, "author"],
}; */
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Sara",
    age: 26,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
//person.role.push("admin");
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
//For loop
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // ERROR!!
}
if (person.role === Role.AUTHOR) {
    //To avoid problems writing READ-ONLY-USER / READ ONLY / ETC. Possible mistakes
    console.log("is author");
}
