import { books } from "./books-data.js";

// console.log("Book Array:", books);

/* 

Destructuring Objects

2.1
Destructure the first book object from the books array into variables called title, author and ISBN.
*/

// const [{ title = "test", author = [], ISBN = 0 }] = books;
const { title, author, ISBN } = books[0];
// console.log(title);

/*
2.2
Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
*/

// const [tag] = books;
const { keywords: tags } = books[0];
// console.log(tags);

/*
2.3
The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
*/

const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language);

/*
2.4
Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
*/

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log("Book Title:", bookTitle);

/*
2.5
Each book object has a deeply nested rating property as illustrated below:

{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},
Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];
*/

// We are trying to get `bookRating = books[0].thirdParty.goodreads.rating;` but we cannot use dot nor bracket notation for destructuring, instead:
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log("Rating:", bookRating);

// ALTERNATIVE:
// const { thirdParty } = books[0];
// const { rating: bookRating } = thirdParty.goodreads;
// console.log("Rating:", bookRating);

// ALTERNATIVE:
// const { thirdParty } = books[0];
// const { goodreads } = thirdParty;
// const { rating: bookRating } = goodreads;
// console.log("Rating:", bookRating);

// ALTERNATIVE:
// const bookRating = books[0].thirdParty.goodreads.rating;
// console.log("Rating:", bookRating);

// ALTERNATIVE:
// const { rating: bookRating } = books[0].thirdParty.goodreads;
// console.log("Rating:", bookRating);

/*
2.6
Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

Example 1
Example 2
Code:

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
*/

// function printBookInfo({ title, author, year }) {
//   console.log(`${title} by ${author}, ${(year = "year unknown")}.`);
// }
// printBookInfo({ title: "Algorithms", author: "Robert Sedgewick", year: "2011" });
