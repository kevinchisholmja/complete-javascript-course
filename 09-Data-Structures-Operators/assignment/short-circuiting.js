import { books } from "./books-data.js";

/*
Short Circuiting (&& and ||)
5.1
Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}
Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

Use short-circuiting.

Example 1
Code:
hasExamplesInJava(books[0]);

Expected output:
true

Example 2
Code:
hasExamplesInJava(books[1]);

Expected output:
"no data available"
*/
// // Using the programmingLanguage property of the first books array element as argument
// function hasExamplesInJava({ programmingLanguage }) {
//   return programmingLanguage === "Java" || "no data available";
// }
// console.log(hasExamplesInJava(books[0]));

// // Using full path
// function hasExamplesInJava({ programmingLanguage }) {
//   return books[0].programmingLanguage === "Java" || "no data available";
// }
// console.log(hasExamplesInJava(books[0]));

// // Using generic parameter (placeholder)
// // In this solution, the first element (an Object) in the Array is passed as the argument
function hasExamplesInJava(book) {
  return book.programmingLanguage === "Java" || "no data available";
}
// console.log(hasExamplesInJava(books[0]));

/*

5.2
Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

{
  title: 'Operating System Concepts',
  // ... removed for clarity
  onlineContent: false,          // <-- HERE
},
*/

/*
// Iterating through the books array using a standard for-loop
for (let i = 0; i < books.length; i++) {

  // Manual property access (Alternative to destructuring)
  const online = books[i].onlineContent;
  const title = books[i].title;

  // Short-Circuiting Evaluation
  console.log((online && `${title} provides online content`) || "No data");
}
*/

/*
// Iterating through the books array using a standard for-loop
for (let i = 0; i < books.length; i++) {

  // Short-Circuiting Evaluation
  books[i].onlineContent && console.log(`"${books[i].title}" provides online content`);
}
*/

/*
// Iterating through the books array using a standard for-loop
for (let i = 0; i < books.length; i++) {
  // Manual property access (Alternative to destructuring)
  const online = books[i].onlineContent;
  const title = books[i].title;

  // Short-Circuiting Evaluation
  online && console.log(`"${title}" provides online content`);
}
*/

/*
for (let i = 0; i < books.length; i++) {
  // This is the "Destructuring" alternative:
  const { title, onlineContent } = books[i];

  // Your logic remains the same:
  onlineContent && console.log(`"${title}" provides online content`);
}
*/
