const arr = [1, 2, 3, 4, 5, 6];

//#slice
console.log("Original Array:", arr);

// Slice extracts a section of the array and returns a new array without modifying the original array
const arr1 = arr.slice(1, 3); // Extracts elements from index 1 to 2 (3 is excluded)
console.log("Sliced Array:", arr1); // Output: [2, 3]

//#splice
// Splice modifies the original array by removing or replacing existing elements and/or adding new elements in place

// Removing elements using splice
const removedElements = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Removed Elements:", removedElements); // Output: [2, 3]
console.log("Modified Array:", arr); // Output: [1, 4, 5, 6]

// Adding elements using splice
arr.splice(2, 0, 'a', 'b'); // Inserts 'a' and 'b' at index 2 without removing any elements
console.log("Array after adding elements:", arr); // Output: [1, 4, 'a', 'b', 5, 6]

// Replacing elements using splice
arr.splice(1, 2, 'x', 'y', 'z'); // Replaces 2 elements starting from index 1 with 'x', 'y', 'z'
console.log("Array after replacing elements:", arr); // Output: [1, 'x', 'y', 'z', 'b', 5, 6]
