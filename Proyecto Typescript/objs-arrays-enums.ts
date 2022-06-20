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

enum Role {
  ADMIN = "ADMIN", //I can assign the value that I want with an "=". If I put a 5 the result will be 5, 6 and 7
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Sara",
  age: 26,
  hobbies: ["Sports", "Cooking"], //Array
  role: Role.ADMIN, //Enum
};

//person.role.push("admin");
//person.role[1] = 10;
//person.role = [0, 'admin', 'user'];

let favoriteActivities: string[]; //If I use "any" is the same as vanilla Javascript
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
