let newNum = "abc";
let convertedNum = Number(newNum);
let anontherCovNum = Number(newNum);

// console.log(convertedNum);
// console.log(typeof convertedNum);

console.log(anontherCovNum);
console.log(convertedNum);


if ((convertedNum) === (anontherCovNum)){
console.log("Yes");
} else console.log("No");

if ((typeof convertedNum) === (typeof anontherCovNum)){
console.log("Yes");
} else console.log("No");

if (NaN === NaN) {
console.log("Yes");
} else console.log("No");

if (typeof NaN === typeof NaN) {
console.log("Yes");
} else console.log("No");

