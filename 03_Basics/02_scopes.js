{
    let a = 1;     // Declared using 'let' - block-scoped variable
    const b = 2;   // Declared using 'const' - block-scoped constant
    var c = 3;     // Declared using 'var' - function-scoped variable

    console.log("value of a in scope: " + a);
}

// Uncommenting the following lines will result in an error
// console.log(a);  // 'a' is not defined outside of the block
// console.log(b);  // 'b' is not defined outside of the block
console.log(c);      // 'c' is defined with 'var' and is accessible outside the block


//outside = global scope
// inside {}  block scope



//nested scope



//this is callend Clouser
/* 

Clouser : a closure is created when a function is defined within another function,
 allowing the inner function to access the outer function's variables and parameters
  even after the outer function has finished executing


*/
function one() {
    const username = 'Mayur'; // Declared in function 'one'

    function two() {
        const website = "website"; // Declared in function 'two'
        console.log(username); // Accessing variable from the outer function 'one'
    }

    // Uncommenting the following line will result in an error
    // console.log(website); // 'website' is not accessible outside of the inner function 'two'

    two(); // Calling the inner function 'two'
}

one(); // Calling the outer function 'one'



/* ***************INTERESTIN ******************************** */

function addOne(value) {
    return value +1
}


//arrow function
addTwo =(value) => {
    return value +2
}

const result = addOne(4) + addTwo(3)
console.log(result) //