/*
### Test 1: Property & Method Shorthand

**Scenario**
You are assembling a `userProfile` object from existing variables. You also need to add a method to print a greeting. You want the syntax to be as clean and compact as possible, avoiding redundancy.

**Task**
Given the variables below, create a `userProfile` object literal that:

1. Includes `username` and `email` using **Property Shorthand** (do not repeat the key names).
2. Includes a method named `login()` using **Method Shorthand** (do not use the `function` keyword or arrow syntax). This method should simply log `"User logged in"`.

**Constraints**

* No `username: username`.
* No `login: function()`.
*/

const username = "tech_guru";
const email = "guru@example.com";

// Your code here
const userProfile = {
  username,
  email,
  login() {
    console.log("User logged in");
  },
};

// userProfile.login();
/*
**Reflection Question**
According to the transcript, if you use the property shorthand `{ openingHours }`, what must the property name inside the object inevitably be?

// My Reflection Question answer:
The property name inside the object inevitably be openingHours
*/

// ---
/*
### Test 2: Computed Property Names

**Scenario**
You are processing data from a dynamic form where field names are stored in variables or need to be calculated on the fly. You need to create a `report` object where the property keys are generated dynamically, not hardcoded.

**Task**
Given the variables below, create a `report` object using **Computed Property Names** (square brackets `[]`) to:

1. Create a property key using the value of `metricName` (should result in `speed: 120`).
2. Create a property key by concatenating `prefix` and `id` (should result in `user_55: "Admin"`).

**Constraints**

* Do not write `speed:` or `user_55:` literally.
* Must use `[]` syntax inside the object literal.

*/
const metricName = "speed";
const prefix = "user_";
const id = 55;

// Your code here
const report = {
  [metricName]: 120,
  [prefix + id]: "Admin",
};

// console.log(report[prefix + id], report[metricName]);

/*
**Reflection Question**
The transcript mentions a specific limitation of the "old way" (pre-ES6) regarding computed names. We could always compute *values* (e.g., `prop: 2 + 2`), but what were we **unable** to do inside the object literal before this feature?


*/

/* Assignments for The Complete JavaScript Course

## Enhanced Object Literals

### 9.1
Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.
*/
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
// console.log([bookData[1][0]] + ": " + bookData[1][1]);
// console.log(`${[bookData[2][0]]}: ${bookData[2][1]}`);

/*
### 9.1
Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.
*/
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  // ...
  pages,
};

// console.log(pages);
