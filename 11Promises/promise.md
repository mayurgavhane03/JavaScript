# JavaScript Promise Methods

JavaScript promises provide several methods for working with asynchronous operations. Below are the main methods available on a Promise object:

## Promise.resolve(value)

Creates a resolved promise with the specified value. If the value is a promise, it's returned as is. If the value is a thenable (an object with a `then()` method), the returned promise adopts its state.

## Promise.reject(reason)

Creates a rejected promise with the specified reason (usually an error). This can be useful for creating a promise that immediately fails.

## Promise.all(iterable)

Takes an iterable (e.g., an array) of promises and returns a single promise that resolves when all of the input promises have resolved, or rejects if any of the input promises reject. The resolved value is an array containing the resolved values of all the input promises, in the same order as the input.

## Promise.allSettled(iterable)

Similar to `Promise.all()`, but it waits for all promises to settle (either resolve or reject) and returns a promise that resolves with an array of objects representing the outcome of each promise.

## Promise.any(iterable)

Takes an iterable of promises and returns a single promise that resolves as soon as any of the input promises resolve, or rejects if all of the input promises reject. The resolved value is the value of the first input promise to resolve.

## Promise.race(iterable)

Takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects. The resolved value is the value of the first input promise to settle (either resolve or reject).

## promise.then(onFulfilled, onRejected)

Attaches callbacks to a promise, which are called when the promise is resolved (fulfilled) or rejected. Both callbacks are optional. Returns a new promise, effectively allowing chaining.

## promise.catch(onRejected)

Attaches a callback that is called when the promise is rejected. It's equivalent to `promise.then(undefined, onRejected)`. Returns a new promise, allowing chaining.

## promise.finally(onFinally)

Attaches a callback that is called when the promise is settled (either resolved or rejected). The callback is invoked regardless of the promise's outcome. Returns a new promise, allowing chaining.

These methods provide powerful tools for working with asynchronous operations and handling promises effectively in JavaScript.
