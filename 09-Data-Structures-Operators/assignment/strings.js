import { books } from "./books-data.js";

//

/* Assignments for The Complete JavaScript Course

## Working with Strings - Part 1

### 15.1
Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

*/
console.log(books[0].ISBN["6"], books[0].ISBN["4"], books[0].ISBN["9"], books[0].ISBN[8]);

// Alternative
const word = books[0].ISBN;

console.log(word[6]);
console.log(word[4]);
console.log(word[9]);
console.log(word[8]);

// ---
/*

### 15.2
Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

*/
const quote = "A computer once beat me at chess, but it was no match for me at kick boxing";

console.log(quote.indexOf(`chess`));
