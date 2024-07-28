function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
        console.log("ok or not")
      })
      .catch((error) => {
        reject(error);
      }).finally(()=>{
        return "ghi"
      })
  });
}


// Example usage+
const apiUrl = "http://api.github.com/users/mayur4gavhane03";
fetchData(apiUrl)
  .then((data) => {
    console.log("Data received:", data);
    // Do something with the data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

/* 


Introduction
Definition:
A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.
Detailed Explanation
States of a Promise:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Methods:

then(): Called when the Promise is fulfilled. It takes two optional arguments: onFulfilled and onRejected.
catch(): Called when the Promise is rejected. It is essentially then(null, onRejected).
finally(): Called when the Promise is settled, whether fulfilled or rejected.


=> Promise.resolve(value):

Creates a resolved promise with the specified value. If the value is a promise, it's returned as is. If the value is a thenable (an object with a then() method), the returned promise adopts its state.

=> Promise.reject(reason):

Creates a rejected promise with the specified reason (usually an error). This can be useful for creating a promise that immediately fails.


=> Promise.all(iterable):

Takes an iterable (e.g., an array) of promises and returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject.
The resolved value is an array containing the resolved values of all the input promises, in the same order as the input.



=> Promise.allSettled(iterable):

Similar to Promise.all(), but it waits for all promises to settle (either resolve or reject) and returns a promise that resolves with an array of objects representing the outcome of each promise.
Promise.any(iterable) (available starting from ECMAScript 2021):

Takes an iterable of promises and returns a single promise that resolves as soon as any of the input promises resolve, or rejects if all of the input promises reject.
The resolved value is the value of the first input promise to resolve.

=> Promise.race(iterable):

Takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.
The resolved value is the value of the first input promise to settle (either resolve or reject).
promise.then(onFulfilled, onRejected):

Attaches callbacks to a promise, which are called when the promise is resolved (fulfilled) or rejected. Both callbacks are optional.
Returns a new promise, effectively allowing chaining.

=> promise.catch(onRejected):

Attaches a callback that is called when the promise is rejected. It's equivalent to promise.then(undefined, onRejected).
Returns a new promise, allowing chaining.

=> promise.finally(onFinally) (available starting from ECMAScript 2018):

Attaches a callback that is called when the promise is settled (either resolved or rejected). The callback is invoked regardless of the promise's outcome.
Returns a new promise, allowing chaining.


*/
