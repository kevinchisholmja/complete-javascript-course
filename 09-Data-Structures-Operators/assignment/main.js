/*
<!-- CJS (aka CommomJS) = Node.js [Local] -->
<!-- ESM (aka ES Modules) = JavaScript Modules [Browser] -->
<!-- Traditional/Regular Scripts = Classic Javascript [Browser] -->

<!-- 
ES6 Module Import/Export Types

Export Types:
1. Named Export (Multiple)
export const books = [...];
export const authors = [...];
export function getBook() { ... }

2. Default Export (One per file)
const books = [...];
export default books;

3. Export List
const books = [...];
const authors = [...];
export { books, authors };

4. Rename on Export
export { books as bookData, authors as writerList };

5. Re-export from another module
export { books } from './data.js';

---

Import Types:
// 1. Named Import
import { books, authors } from './books-data.js';

// 2. Rename on Import
import { books as bookData } from './books-data.js';

// 3. Namespace Import
import * as BookData from './books-data.js';
// Use: BookData.books, BookData.authors

// 4. Default Import
import books from './books-data.js';

// 5. Mixed Import
import books, { authors } from './books-data.js';

// 6. Side-effect Import (for code that runs)
import './initialize.js';
-->
*/

// Main entry point
// Books import (Named Import)
import { books } from "./books-data.js";

// console.log("Books data loaded:", books);

// Topic: Destructuring Arrays
// Action: Side-effect Import (Executes the module code without importing values)
import "./array-destructuring.js";

// Topic: Destructuring Object
// Action: Side-effect Import (Executes the module code without importing values)
import "./object-destructuring.js";

import "./short-circuiting.js";
import "./spread-operator.js";
import "./rest-pattern.js";
import "./nullish-coalescing.js";
import "./logical-assignment.js";
import "./for-of-loop.js";
import "./enhanced-object-literals.js";
import "./looping-arrays.js";
import "./looping-objects.js";
import "./maps.js";
import "./optional-chaining.js";
import "./sets.js";
import "./strings.js";
