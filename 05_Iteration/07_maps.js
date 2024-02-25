// Part 1: Using forEach to log each element incremented by 1 (nums array)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
nums.forEach((element) => {
    console.log(element + 1);
});

// Part 2: Using map to create a new array with each element incremented by 1 (nums array)
const myNum = nums.map((num) => {
    return num + 1;
});
console.log(myNum);

// Part 3: Using map, chaining, and filter to perform multiple operations on the array (nums array)
const newMap = nums.map((num) => num + 1).map((num) => num * 2).filter((num) => num >= 20);
console.log(newMap);

// Additional notes

// Additional notes on map:
// - The map function creates a new array by applying a provided function to each element of the original array.
// - It returns a transformed array without modifying the original array.
// - The provided function is a callback that defines the transformation logic.
// - The new array has the same length as the original array.
// - Map is useful for operations like data transformation, applying a formula to each element, or extracting a specific property from objects in an array.
// - Chaining multiple map operations allows for a concise and readable way to perform complex transformations on the array.
// - It is a powerful tool for creating modified versions of arrays without altering the original data.
// - Keep in mind that map does not filter elements; it transforms each element based on the provided function.