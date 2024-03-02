// Basic example of a Promise
const promise1 = new Promise((resolve, reject) => {
    // Async task wrapped in a Promise

    setTimeout(() => {
        // console.log("timeout");
        resolve(); // Resolving the Promise after the async task is completed
    }, 1000);
});

// .then is used to handle the resolved state of the Promise
promise1.then(() => {
    // console.log("promise1 consumed");
});

// Another Promise example
new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Promise is running");
        resolve(); // Resolving the Promise after another async task
    }, 1000);
}).then(() => {
    // console.log("Async 2 resolved");
});

// Notes on Promises:
// 1. Promise Creation:
//    - Promises are objects that represent the completion or failure of an asynchronous operation.
//    - Created using the `Promise` constructor, which takes a function with `resolve` and `reject` parameters.

// 2. Async Operations:
//    - Promises handle asynchronous tasks, such as network requests or timeouts.
//    - The asynchronous task is placed inside the Promise constructor function.

// 3. Resolve and Reject:
//    - The `resolve` function is called when the asynchronous operation is successful.
//    - The `reject` function is called when there is an error or the operation fails.

// 4. Chaining with `.then()`:
//    - The `.then()` method handles the resolved state of a Promise.
//    - Allows chaining multiple `.then()` calls for sequential asynchronous operations.

// 5. Error Handling with `.catch()`:
//    - The `.catch()` method handles errors in Promises.
//    - It takes a callback function that will be executed when the Promise is rejected.

// 6. Finalization with `.finally()`:
//    - The `.finally()` method specifies a callback that will be executed regardless of whether the Promise is resolved or rejected.

// Explanation for Interviewer:
// - Promises provide a structured way to work with asynchronous code.
// - `.then()` is used for handling successful resolution, `.catch()` for error handling, and `.finally()` for finalization.
// - Promises improve code readability and maintainability, especially in scenarios with multiple asynchronous operations.



const Promise3 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {
            name:"mayur",
            age:20
        }
        resolve(user)
    },2000)
})


Promise3.then((user) => {
    console.log(user) //we have acces to the user 
})


// Creating a Promise that resolves with a user object after a timeout
const Promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Simulating an error condition, set 'error' to true to trigger rejection
        let error = true;
        const user = {
            name: "JavaScript",
            age: "when web started"
        };
        if (!error) {
            resolve(user);
        } else {
            reject("Error: JavaScript went wrong");
        }
    }, 1000);
});

// Asynchronous function to consume the Promise using async/await
async function consumePromise5 () {
    try {
        // Waiting for the Promise to resolve or reject
        const response = await Promise5;
        console.log(response); // Log the resolved user object
    } catch (err) {
        console.log(err); // Log any error if the Promise is rejected
    }
}
consumePromise5()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers()



fetch('https://api.github.com/users/mayurgavhane03')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
