const Objects = {
    name: 'cusoton',
    age: 34
};
// changer()
// Objects.name = "Mayur";
console.log(typeof changer)
const changer = () =>{
    Object.assign(Objects, {name:"Mayur Gavhane"})
}
console.log(typeof changer)
changer()
console.log(changer)
console.log(Objects.name); // Output: Mayurdd

