



const Id = 45;  // Declares a constant variable 'Id' with a value of 45
let name = "mayur";  // Declares a variable 'name' with a value of "mayur"
var age = 21;  // Declares a variable 'age' with a value of 21
city = 'Nanded';  // Declares a variable 'city' without using 'const', 'let', or 'var'. This implicitly makes it a global variable with a value of 'Nanded'

console.table([name, Id, city, age]);  // Outputs the values of 'name', 'Id', 'city', and 'age' in a table format using console.table()

let newId;  // Declares a variable 'newId' with a value of undefine

//var keyword is available in everyscope it has scope problem if we declare name in many scope {  }  
// we can one name change happen in all  name variable so dont use variable

console.log({name, newId, Id , age})