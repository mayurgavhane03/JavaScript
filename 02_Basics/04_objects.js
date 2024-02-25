
//this is singleton object there is no difference between const user = {}


const appUser  =  new Object()

appUser.name = "Mau"
appUser.id = 2
appUser.age = 32
appUser.isLoggedIn = false


// console.log(appUser)


const regularUser =  {
    email: "may@gmail.com",
    fullName :  {
        userFullName: {
            firstName: "mayur",
            lastName: "gavhane"
        }
    }
}
console.log(regularUser)

//optional chaning if fullName is not exist then 
console.log(regularUser?.fullName)


const obj1  = {
    1:"a", 2:"b"
}

const obj2 = {3:"c", 4:"d"}

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const obj4 = Object.assign({},obj1, obj2)
console.log(obj4)

const course = {
    courseName :  "javaScript",
    price: 45,

}

const {courseName, price} =  course

console.log(courseName)