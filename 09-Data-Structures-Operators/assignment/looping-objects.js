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

## 

### 11.1 
Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

In the end, the entries array should be filled with arrays containing keys:
[["rating"], ["ratingsCount"], ["reviewsCount"], ["fiveStartRatingCount"], ["oneStartRatingCount"]];

*/

const entries = [];

for (const goodreadsKey of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([goodreadsKey]);
}

// console.log(entries);

// console.log(Object.keys(books?.[0]?.thirdParty?.goodreads))
/*

### 11.2
The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

Push each value to the appropriate inner array in the entries array (use index from entries()).
*/

for (const [key, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[key].push(value);
}

// console.log(entries);

/*

### 11.3
Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

*/

const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// Alternative:
const entries3 = [];
entries3.push(...Object.entries(books[0].thirdParty.goodreads));
// console.log(entries3);

// Alternative:
const entries4 = [];
for (const book of Object.entries(books[0].thirdParty.goodreads)) {
  entries4.push(book);
}
// console.log(entries4);

/*
### 11.4
Log the entries and entries2 variables to the console, and compare them. They should look the same.

*/
// console.log(entries);
// console.log(entries2);
