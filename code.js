// code description
//     Fun with ES6 Classes #1 - People, people, people
// Time for some OOP fun!

// Define a class Person with the following properties:

// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.
// class Person {
//   // Get coding in ES6 :D
//   constructor(firstName="John",lastName="Doe",age=0,gender="Male"){
//     this.firstName=firstName,
//     this.lastName=lastName,
//     this.age=age,
//     this.gender=gender
//   }
//   sayFullName(){
//     return `${this.firstName} ${this.lastName}`;
//   }
//   static greetExtraTerrestrials(raceName){
//     return `Welcome to Planet Earth ${raceName}`
//   }
// }
// const faaa=new Person();
// console.log(faaa.sayFullName())
// console.log(Person.greetExtraTerrestrials("Martians"));
// code description
//     Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!
// function validParentheses(parentStr) {
//   // Your code here
//   const arr = [];
//   for (let char of parentStr) {
//     if (char === "(") {
//       arr.push(char);       
//     } else {
//       if (arr.length === 0) return false;  
//       arr.pop();             
//     }
//   }
//   return arr.length === 0;
// }
// function cookie(x) {
//   let name;

//   if (typeof x === "string") {
//     name = "Zach";
//   } else if (typeof x === "number") {
//     name = "Monica";
//   } else {
//     name = "the dog";
//   }

//   return `Who ate the last cookie? It was ${name}!`;
// }
