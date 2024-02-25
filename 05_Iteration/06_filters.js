// Part 1: forEach with console.log and return (coding array)
const coding = [" js", " ruby", "Java", "python", "cpp"];
const values = coding.forEach((element) => {
  console.log(element);
  // return element; // forEach doesn't support a return value; it always returns undefined
});
// console.log(values) // it gives undefined

// Part 2: Filtering numbers greater than 5 (nums array)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const v1 = nums.filter((value) => {
  return value > 5;
});
console.log(v1);

// Part 3: Filtering numbers greater than 7 using forEach (nums array)
const newNums = [];
nums.forEach((value) => {
  if (value > 7) newNums.push(value);
});
console.log(newNums);

// Part 4: Filtering books published after 1992 (books array)
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filterBooks = books.filter((book) => {
  return book.publish > 1992;
});
console.log(filterBooks);

// Additional note
// this code add notes to revise filter later for interview

// Additional note
// The filter function is used to create a new array by filtering elements from an existing array based on a specified condition.
// It takes a callback function as an argument, which returns a Boolean value determining whether the element should be included in the new array.
// In the 'filterBooks' example, it creates a new array containing books published after the year 1992.
// This is a powerful tool for selectively extracting elements from an array based on a given criteria.
// It's important to note that the original array remains unchanged, and a new array with the filtered elements is returned.
// Understanding how to use filter is beneficial for handling and manipulating arrays in JavaScript.