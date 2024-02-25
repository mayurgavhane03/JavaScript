

function objector(obj) {
     console.log(obj.name)
     console.log(obj.age)
}


const user = {
    name: 'user',
    age: 36,
}


objector(user)

function value(arr) {
    return arr[0] !== undefined ? arr[0] : "Default value";
}
const arr = [1,5,2,3,6,9,8,7,4]

console.log(value(arr)); // Outputs: Default value
