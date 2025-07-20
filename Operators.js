// Operators
let x = 10;
let y = 3;

console.log(x + y);   // 13 (Addition)
console.log(x - y);   // 7  (Subtraction)
console.log(x * y);   // 30 (Multiplication)
console.log(x / y);   // 3.3333 (Division)
console.log(x % y);   // 1  (Modulus - remainder)
console.log(x ** y);  // 1000 (Exponentiation)

// Control Structures = If-else
if (x > y) {
  console.log("x is greater than y");
} else if (x === y) {
  console.log("x equals y");
} else {
  console.log("x is less than y");
}

// Switch
let color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}
