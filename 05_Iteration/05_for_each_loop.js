const arr = ["a", "b", "c", "d", "e", "f", "g"]

// array.forEach(element => {
    
// });

//this is the calll back fucntion call back fuction doese not have name

arr.forEach((element) => {
    console.log( element)
})

const arr2 = [1,2,3,5]

arr2.forEach(element => {
   let a= element * 2
  console.log(a)
})

const newObject =[
  {name:"mayur", age:20},
  {name:"ganesh", age:20},
  {name:"rushi", age:20},
]

newObject.forEach(element => {
  console.log(element.name)
})
console.log("for of loop")
for(let i of newObject){
  console.log(i.name)
}

for(let i in newObject) {
  console.log( newObject[i] )
}