// Promise 
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 1000);
});

myPromise.then((message) => console.log(message));

// Async/Await 
async function asyncFunc() {
  const result = await myPromise;
  console.log("Async result:", result);
}
asyncFunc();
