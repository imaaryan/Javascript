//There are two types of Data Types "Primitive" and "Non-Primitive"
const myName = " Aaryan ";  //String
let age = 23;  //Number
const isTaken = true;  //Boolean
let bankBalance = null;  //Null
let goToGym;  //Undefined
let wantBankBalance = BigInt(9007199254740991); //BigInt
let hobbie = "He Likes: Music, Swimming and Traveling while listening Music";

//function which tells if a person is in a relationship or not
// let inRelationship = function(condition){
// if (condition) {
//     return "Yes";
// } return "No";
// };

//More Optimize Way of Above Function
let inRelationship = function(condition){
return condition ? "Yes" : "No"
};

//function just to use "include" string method
function doesInclude(word){
return (hobbie.toLowerCase().includes(word.toLowerCase())) ? "Yes" : "No" 
};
// what " ? "Yes" : "No"; " is doing in the code
// This is called a ternary operator (short for "three-part operator").
// It’s a shortcut for writing an if-else statement in JavaScript.
// How it Works: The ternary operator has three parts:
// (condition) ? doThisIfTrue : doThisIfFalse;
// If condition is true, it returns the first value ("Yes" in your case).
// If condition is false, it returns the second value ("No" in your case).


// console.log("Hi, I'm " + myName + " I'm " + age + " Years Old " ); // One Way Called (String Concatenation)
console.log(`Hi, I'm ${myName}. I'm ${age} years old.`); // Second Way Called (String Interpolation, )
// Additional Console Log 
console.log(`Is ${myName} in a Relationship?`, inRelationship(isTaken));
console.log(`What's his Bank Balance? ${bankBalance}, And How much He want it to be? ${wantBankBalance}...`);
console.log(`Is He Planing to go to the Gym? ${typeof goToGym}`);

//String Methods

//.length – Get string length
console.log(`How Many Characters are there in his Name? ${myName.length}`);

//.trim() – Remove spaces
console.log(`How Many Characters are there in his Name without Spaces? ${myName.trim().length}`);

//.toUpperCase() – Change case
console.log(`Change his name into UPPERCASE, ${myName.toUpperCase()}`); 

//.toLowerCase() – Change case
console.log(`Change his name into LOWERCASE, ${myName.toLowerCase()}`); 

//.includes() – Check substring
console.log(`Did he like?`, doesInclude("MuSic")); 

//.split() – Convert string to array
console.log(`What's Aaryan's First Hobbie? ${hobbie.split(" ")[2]}`); 

//.replace() – Replace only first text in the paragraph
console.log(`Now he don't like music what is his new hobbie? ${hobbie.replace("Music", "Gym")}`); 

//.replaceAll() – Replace same text from full paragraph
console.log(`Now he don't like old things what is his new hobbie? ${hobbie.replaceAll("Music", "POP Music")}`); 

//.startsWith() / .endsWith() – Check start or end of a string
let filename = "image.png";
console.log(filename.startsWith("image")); // true
console.log(filename.endsWith(".png")); // true

//.indexOf() / .lastIndexOf() – Find position of a word/letter
console.log(myName.trim().indexOf("A")); // 0 (first 'a')
console.log(myName.trim().lastIndexOf("a")); // 4 (last 'a')

// .slice() – Extract part of a string
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java" (4th index is not included)
console.log(text.slice(-6)); // "Script" (last 6 characters)

//.substring() – Extract part of a string  (Similar to .slice(), but does not accept negative values.)
console.log(text.substring(0, 4)); // "Java"

//.split() – Convert string to array
let splitText = "Apple, Banana, Cherry";
console.log(splitText.split(", ")); // ["Apple", "Banana", "Cherry"]
console.log("Aaryan".split("")); // ["H", "e", "l", "l", "o"]

// .repeat() – Repeat string
console.log(`How's Aaryan's name sound in Mountains? ${myName.repeat(3)}`);













