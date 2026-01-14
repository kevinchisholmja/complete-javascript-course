import { books } from "./books-data.js";
/* AI
### Test 1: Iterating Values (Object.values)

**Scenario**
You have an object representing the monthly revenue of different branches of a store. You want to calculate the **total** revenue for the company, but you don't care about which branch made which amount—only the numbers matter.

**Task**
Given the `branchRevenue` object:

1. Use `Object.values()` to get an array of the revenue numbers.
2. Use a `for...of` loop to iterate over that array and sum the values into a variable `totalRevenue`.
3. Log the result.

**Constraints**

* Must use `Object.values()`.
* Must use `for...of`.

*/
const branchRevenue = {
  seattle: 10400,
  tokyo: 15200,
  paris: 8700,
};

// Your code here
let sum = 0;
for (const total of Object.values(branchRevenue)) {
  sum += total;
}
// console.log(sum);

/*
**Reflection Question**
The transcript mentions that `for...of` loops generally work on "Iterables" (like Arrays). Since Objects are **not** Iterables by default, what role does `Object.values()` play in making this loop possible?

Reflection Question answer:
Objects themselves are not iterable. Object.values() transforms the object's data into an Array, and since Arrays are iterable, the for...of loop can then work on that array.
*/

// ---

/* AI
### Test 2: Entries & Nested Destructuring

**Scenario**
You are analyzing a game configuration object. Each setting (key) has a detailed object as its value, containing `min` and `max` limits. You want to print a summary for each setting.

**Task**
Given the `gameSettings` object:

1. Use `Object.entries()` and a `for...of` loop.
2. **Destructure** the loop variable immediately to get the `key` (setting name) and the inner object's properties (`min` and `max`).
3. Log: `"[SettingName]: Range is [min] to [max]"`.

**Constraints**

* Must destructure `[key, { min, max }]` directly in the loop head.
*/

const gameSettings = {
  difficulty: { min: 1, max: 5 },
  volume: { min: 0, max: 100 },
};

// Your code here
for (const [i, { min, max }] of Object.entries(gameSettings)) {
  // console.log(`${i}: Range is ${min} to ${max}`);
}

/*
**Reflection Question**
In the transcript, the instructor warns that `entries` works differently for Arrays vs. Objects. For an Array, you call `arr.entries()`. For an object, you must call `Object.entries(obj)`. Why the difference?
Reflection Question answer:
The difference with Arrays vs. Objects `entries` is that `entries` are applied to Arrays naturally, while `Object.entries(obj)` transforms a copy of the object to an array then apply the entires method. 

*/

/* Assignments for The Complete JavaScript Course

## Looping Arrays: The for-of Loop

### 8.1
Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.
*/
let pageSum = 0;
for (const book of books) pageSum += book.pages;
// console.log(pageSum);
/*
### 8.2
Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).
*/

const allAuthors = [];
for (const book of books)
  typeof book.author === "string" ? allAuthors.push(book.author) : allAuthors.push(...book.author);

// console.log(allAuthors);

// Alternative1:
// const allAuthors1 = [];
// for (const book of books) {
//   if (typeof book.author === "string") {
//     allAuthors1.push(book.author);
//   } else {
//     allAuthors1.push(...book.author);
//   }
// }
// console.log(allAuthors1);

// Alternative2:
// const allAuthors2 = [];
// for (const book of books) {
//   if (typeof book.author === "string") {
//     allAuthors2.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors2.push(author);
//     }
//   }
// }
// console.log(allAuthors2);

// Alternative3 (keeps array - not good for this specific question, but still useful):

// const allAuthors3 = [];
// for (const book of books) {
//   allAuthors3.push(book.author);
// }
// console.log(allAuthors3);

/*
### 8.3
Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

Expected output:
1. Robert Sedgewick
2. Kevin Wayne
3. Harold Abelson
   ...                    // part removed for clarity
15. Cal Newport
*/

for (const [key, value] of allAuthors.entries()) {
  // console.log(key + 1, value);
}
