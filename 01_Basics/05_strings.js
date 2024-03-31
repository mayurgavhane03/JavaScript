



//string interpolation

const name = 'mayur'
const surName = 'Gavhane'

console.log(`${name} ${surName}`)

let st = "mayur "

const newName = new String("   mayur    ")

console.log(newName)
console.log(newName)
console.log(typeof newName )

console.log(newName.split('').reverse()) //reverse


console.log(newName.toLocaleLowerCase())
console.log(newName.__proto__) //empty object

const s  =  newName.substring(0, 2) //last value is not include
console.log(s)
const s2 = newName.slice(0, 3)
console.log(s2)


const s3 =  newName.trim() //to remove extra whitespace

const s4 = newName.replace('y', 't')
console.log(s4) //replace

console.log(newName.includes('y')) //it check it is present or not  