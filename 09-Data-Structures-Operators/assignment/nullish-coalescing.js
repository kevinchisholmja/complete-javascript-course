import { books } from "./books-data.js";
/*
The Nullish Coalescing Operator (??)
6.1
There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
*/
/*
for (let index = 0; index < books.length; index++) {
  const online = books[index].onlineContent;
  const title = books[index].title;

  online ?? console.log(`${title} provides no data about its online content`);
}
*/
/*

for (let index = 0; index < books.length; index++) {
  books[index].onlineContent ??
    console.log(`${books[index].title} provides no data about its online content`);
}
*/
/*
for (let index = 0; index < books.length; index++) {
  const hasOnlineContent = books[index].onlineContent;
  const title = books[index].title;
  hasOnlineContent ?? console.log(`${title} provides no data about its online content`);
}
*/
