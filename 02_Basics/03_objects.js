// Define a symbol
const sym = Symbol("mayur");

// Create an object named 'user' with properties 'name', 'age', and a symbol property
const user =  {
    name: 'John',
    age: 36,
    [sym] :  "NewName"
}

// Change the value of the 'name' property of the 'user' object
user.name = "mayur gavhane";

// Define a function 'greetings' as a method of the 'user' object
user.greetings = function () {
    console.log("Hello")
}

// Define a function 'greetingsTow' as a method of the 'user' object
user.greetingsTow = function () {
    console.log(`this is my name ${this.name}`)
}

// Print the 'user' object
console.log(user.greetingsTow())


// Call the 'greetingsTow' method of the 'user' object
console.log(user.greetingsTow())

// Define an arrow function 'changer' to change the 'name' property of the 'user' object
const changer = (newName) => {
    user.name = newName;
}

// Call the 'changer' function to change the 'name' property of the 'user' object
changer("my new name is mayu")

// Print the updated 'user' object
console.log(user)
