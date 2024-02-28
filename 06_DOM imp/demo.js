// var x = 34;

/* function foo(){
   
     x = 10;
     console.log(x)
    
}
foo()

console.log(x) */

const arr= [0,1,2,3,4,5,6,7,8,9]

const filterArr =  arr.filter((element)=>{
     return element <  3;
})

const stringArr =  arr.map((element)=>{
    return element.toString();
})
console.log(stringArr)

console.log(filterArr)



const user1 = {
    name:'mayur',
    age: 28,
    address:{
        city:"auran",
        state:"maha"
    }
}

const user2  = user1;

user2.name  =  "adfadfasd"
user2.age = 6456;

console.log(user1)
console.log(user2)