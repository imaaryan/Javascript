let myName = "Aaryan";
let age = 23;
let isTaken = true;
let bankBalance = null;
let goToGym;
let wantBankBalance = BigInt(9007199254740991);
let symbol = Symbol("Aaryan");
let nanNumber = NaN;
let infinity = Infinity;
let functionTypeof = function() {
console.log("Function");
}
let fruits = ["apple", "grapes", "mango", "banana"]
let details = {
firstName : "Aaryan",
lastName : "Pandey"
};

console.log(typeof myName); //Strings
console.log(typeof age); // Number
console.log(typeof isTaken); // Boolean
console.log(typeof bankBalance); // Object
console.log(typeof goToGym); // Undefined
console.log(typeof wantBankBalance); //Bigint
console.log(typeof symbol);// Symbol
console.log(typeof nanNumber); // Number
console.log(typeof infinity); // Number
console.log(typeof functionTypeof); // Function
console.log(typeof fruits); // Object
console.log(typeof details); // Object