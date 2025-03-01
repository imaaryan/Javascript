// .toFixed(n) – Round to n decimal places (returns a string)
let pi = 3.14159265359;
console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(0)); // "3"

// .toPrecision(n) – Format number to n total digits (returns a string)
let num = 123.456;
console.log(num.toPrecision(4)); // "123.5"  (Keeps 4 total digits)
console.log(num.toPrecision(2)); // "1.2e+2" (Only 2 total digits, uses scientific notation)
console.log(num.toPrecision(6)); // "123.456" (Keeps all digits)
// Simple Rule:
// If n is greater than the number of whole digits, it includes decimals.
// If n is less than the whole number’s digits, it switches to scientific notation.


// .toString() – Convert number to a string
let numToString = 255;
console.log(numToString.toString()); // "255"
console.log(numToString.toString(2)); // "11111111" (binary)
// 255 in decimal → 11111111 in binary
// (255 = 2⁷ + 2⁶ + 2⁵ + 2⁴ + 2³ + 2² + 2¹ + 2⁰)
console.log(numToString.toString(16)); // "ff" (Hexadecimal)
console.log(numToString.toString(8));  // "377" (Octal)
console.log(numToString.toString(10)); // "255" (Decimal, same as default)
// Easy Definition
// It converts a number into a string, using the given base (radix).
// The radix decides the number system (e.g., 2 for binary, 16 for hexadecimal).

// .parseInt() – Convert a string to an integer
console.log(parseInt("42")); // 42
console.log(parseInt("3.14")); // 3
console.log(parseInt("100px")); // 100
console.log(parseInt("abc")); // NaN
console.log(parseInt("abc123")); // NaN
console.log(parseInt("123abc")); // 123


// .parseFloat() – Convert a string to a floating-point number
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("10.5px")); // 10.5
console.log(parseFloat("abc")); // NaN
console.log(parseFloat("abc.123")); // NaN
console.log(parseFloat("123.abc")); // 123
console.log(parseFloat("123.0abc0")); // 123
console.log(parseFloat("123.00")); // 123
console.log(parseFloat("123.01")); // 123.01


// .isNaN() – Check if a value is NaN (Not a Number)
console.log(isNaN("Hello")); // true
console.log(isNaN(123)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false


// .isFinite() – Check if a value is a finite number (not Infinity, -Infinity, or NaN).
// Returns true for normal numbers and false for infinite or non-numeric values.
console.log(isFinite(10));       // true (10 is a normal number)
console.log(isFinite(3.14));     // true (3.14 is a finite number)
console.log(isFinite(Infinity)); // false (Infinity is not finite)
console.log(isFinite(-Infinity));// false (-Infinity is not finite)
console.log(isFinite(NaN));      // false (NaN is not a number)
console.log(isFinite("100"));    // true (String "100" is converted to number)
console.log(isFinite("Hello"));  // false (Cannot convert "Hello" to a number)


// .Math.round() – "Round" to the nearest integer
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// .Math.floor() – "Round down" to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5

// .Math.ceil() – "Round up" to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -4


// .Math.abs() – Get the absolute value
// The absolute value of a number is its distance from zero on a number line, without considering its sign. (-, +)
console.log(Math.abs(-10)); // 10
console.log(Math.abs(5)); // 5


// .Math.pow(x, y) – Calculate x to the power of y
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.pow(5, 2)); // 25 (5²)
//Its also have a shortcut (**)
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25


// .Math.sqrt() – Get the square root
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(2)); // 1.4142135623730951


//just trying to add 2 methods in same log
console.log(Math.round(Math.sqrt(2))); // 1


// .Math.random() – Generate a random number between 0 and 1
console.log(Math.random()); // Example: 0.7263
console.log(Math.random() * 10); // Example: 7.263 (random number between 0-10)
console.log(Math.round(Math.random() * 10)); // Example: 7 (random number between 0-10)
console.log(Math.ceil(Math.random() * 10)); // Example: 7 (random number between 1-10)

//  Generate a random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // Random number between 1-100


// .Math.max(a, b, c, ...) – Get the highest number
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.max(-1, -5, 0)); // 0


// .Math.min(a, b, c, ...) – Get the lowest number
console.log(Math.min(10, 20, 5)); // 5
console.log(Math.min(-1, -5, 0)); // -5

