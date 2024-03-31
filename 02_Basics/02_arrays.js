const arr = ["batman", "superman", "joker"]
const arr2 = ["ironman", "thor", "spiderman"]


//spred operator
const arr3 =[...arr, ...arr2]

let arr00 =[]

for(let i=0; i<arr.length; i++)
{
    arr00.push(arr[i])
}

console.log(arr00)

console.log(arr3)

//concate also add
const arr4 = arr.concat(arr2)

console.log(arr4)

const newArr = [1,2,3,[4,5,6], 8, [4,5,6,] , [4,5,6,]]

console.log(newArr)

const newArr2 = newArr.flat(5)
console.log(newArr2)


const name ="mayur"

console.log(Array.from(name))



