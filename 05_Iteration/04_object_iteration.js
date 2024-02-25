const myObject = {
    "m1": "mayur1",
    "m2": "mayur2",
    "m3": "mayur3",
 }

//basically for in loopis use to iterate of the objects
// remove if

/* 
 for(const key in myobject) // key is the key of the object
 => to return value of that key we use simple myObject[key]
*/


 for (const key in myObject) {
   console.log(myObject[key])
 }
//this give error

// for (const k of myObject) {
//     console.log(myObject[k])
// }