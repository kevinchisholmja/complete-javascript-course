import { books } from "./books-data.js";

//

/* Assignments for The Complete JavaScript Course

## Working with Strings - Part 1

### 15.1
Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

*/
// console.log(books[0].ISBN["6"], books[0].ISBN["4"], books[0].ISBN["9"], books[0].ISBN[8]);

// Alternative
const word = books[0].ISBN;

// console.log(word[6]);
// console.log(word[4]);
// console.log(word[9]);
// console.log(word[8]);

/*
### 15.2
Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

*/
const quote = "A computer once beat me at chess, but it was no match for me at kick boxing";

// console.log(quote.indexOf(`chess`));

/*
### 15.3
Extract the word "boxing" from the same quote string, and log it to the console.

*/
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));
// console.log(quote.slice(quote.lastIndexOf(' ') )); // This includes the blank space

// Note
/*
What this does:
1. `quote.lastIndexOf(' ')` searches the string from right to left and returns the index of the last space character.
2. `+ 1` moves the index past the space to the first character of the final word.
3. `slice(startIndex)` extracts the substring from that position to the end of the string.
4. `console.log(...)` prints the result.
*/

/*
### 15.4
Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

Example 1
isContributor('Julie Sussman (Contributor)');
true

Example 2
isContributor('Robert Sedgewick');
false
*/
const isContributor = (str) => {
    
    return str.lastIndexOf("(Contributor)") !== -1;

    // Alternative (for include)
    // return str.includes("(Contributor)");
}

// Other
// const isContributor = (str) => {
//     for (const book of Object.values(books) ){
//         const lastAuthor = (book.author[book.author.length -1])
//         lastAuthor.includes(str) && console.log(lastAuthor)
//     }
// }

// const isContributor = (Arr) => {
//     for (const book of Object.values(Arr) ){
//         const lastAuthor = (book.author[book.author.length -1])
//         if (lastAuthor.includes(`Contributor`)){
//             console.log(lastAuthor)
//         }
        
//     }
// }

console.log(isContributor('Julie Sussman (Contributor)'));

/*
Find last in an array:
const fruits = ['apple', 'banana', 'cherry', 'date'];
const lastFruit = fruits[fruits.length - 1];
const lastFruit = fruits.at(-1);
const lastFruit = fruits.pop();
*/