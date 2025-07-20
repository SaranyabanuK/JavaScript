const person = {
  firstName: "Saranya",
  lastName: "Banu",
  age: 22,
  greet() {
    return `Hi, I'm ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.greet());
console.log('Age is',person[ "age"]);

// ES6+ Features
// Template literals
let city = "Colombo";
console.log(`I live in ${city}`);

// Destructuring
const { firstName, age: personAge } = person;
console.log(firstName, personAge);

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);