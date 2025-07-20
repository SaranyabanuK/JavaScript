const nums = [1, 2, 3, 4, 5];

// Map - transform array
const doubled = nums.map(n => n * 2);
console.log(doubled);

// Filter - select elements
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

// Reduce - accumulate values
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum);