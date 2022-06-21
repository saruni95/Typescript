"use strict";
var exports = {};
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
//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Sara",
    age: 26,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN, //Enum
};
//person.role.push("admin");
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];
let favoriteActivities; //If I use "any" is the same as vanilla Javascript
favoriteActivities = ["Sports"];
console.log(person.name);
//For loop
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // ERROR!!
}
if (person.role === Role.AUTHOR) {
    //To avoid problems writing READ-ONLY-USER / READ ONLY / ETC. Possible mistakes
    console.log("is author");
}
