// Part 1: Using reduce to calculate the total sum of elements in nums array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let initialValue = 0;
const total = nums.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue);
// console.log(total); // Output: 55

// Part 2: Using reduce to calculate the total price of items in shopingCart array
const shoppingCart = [
    { itemName: "js", price: 100 },
    { itemName: "cpp", price: 200 },
    { itemName: "java", price: 400 },
    { itemName: "react", price: 500 },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 100);
console.log(totalPrice);
// Output: 1200

// Additional notes on reduce:
// - The reduce function is used to "reduce" an array to a single value.
// - It takes a callback function as its first argument, which has two parameters: accumulator and currentValue.
// - The accumulator is the result of the previous callback invocation or the initial value provided (in the second argument of reduce).
// - The currentValue is the current element being processed in the array.
// - The callback function is executed for each element in the array, updating the accumulator based on the logic defined.
// - The result is the final accumulated value.
// - The initialValue is an optional parameter, specifying the initial value of the accumulator. If omitted, the first element of the array 
//    is used as the initial accumulator value.
// - In Part 1, reduce is used to sum up the elements of the nums array, starting from an initial value of 0.
// - In Part 2, reduce is used to calculate the total price of items in the shoppingCart array.
// - Understanding how to use reduce is crucial for performing aggregations on arrays, such as summing values or finding maximum/minimum values.
// - It's a versatile and powerful tool for array manipulation. 
// Array manipulation allows you to do tasks such as add, remove, or transform elements in your array
