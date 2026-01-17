import { books } from "./books-data.js";

/* Assignments for The Complete JavaScript Course

## 

### 13.1 
Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

[['title', 'Clean Code'], ['author', 'Robert C. Martin']]
*/

const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);

// console.log(bookMap);

/*

### 13.2

Set a new key in bookMap called pages, and assign it with a number 464.

*/
bookMap.set("pages", 464);

// console.log(bookMap);

/*

### 13.3

Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

*/
// console.log(`${bookMap.get("author")} by ${bookMap.get("author")}.`);

/*

### 13.4

Get the size of bookMap, and log it to the console.

*/
// console.log(bookMap.size);

/*

### 13.5

Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

*/
bookMap.has("author") && console.log("The author of the book is known");

// Aleternative
// if (bookMap.has('author')) console.log('The author is known');

/*

### 14.1

Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

*/
const firstBookMap = new Map(Object.entries(books[0]));

// console.log(firstBookMap);

/*

### 14.2

Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

*/
for (const [key, val] of firstBookMap.entries()) {
  if (typeof val === "number") {
    // console.log(key);
  }
}
