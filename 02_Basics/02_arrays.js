const arr = ["batman", "superman", "joken"]
const arr2 = ["ironman", "thor", "spiderman"]


//sprad operator
const arr3 =[...arr, ...arr2]

console.log(arr3)

//concate also add
const arr4 = arr.concat(arr2)

console.log(arr4)

const newArr = [1,2,3,[4,5,6], 8, [4,5,6,]]


const newArr2 = newArr.flat(5)
console.log(newArr2)


const name ="mayur"

console.log(Array.from(name))



