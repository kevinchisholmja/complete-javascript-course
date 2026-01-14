import { books } from "./books-data.js";

/* AI Gemini
### Test 1: Deep Nesting & Defaults

**Scenario**
You are building a dashboard that displays user profile settings. The data comes from an API where the `preferences` object—and specifically the `theme` settings inside it—might be missing entirely for new users.

**Task**
Given the `user` object below:

1. Extract the `color` property from `user.preferences.theme`.
2. Use **Optional Chaining** to prevent errors if `preferences` or `theme` is missing.
3. Use **Nullish Coalescing** to default to `"blue"` if the color is missing or the chain returns `undefined`.
4. Store the result in a variable named `themeColor` and log it.

**Constraints**

* Must use `?.`
* Must use `??`
* Do not use `if/else` checks.
*/

const user = {
  name: "Alice",
  // preferences: { theme: { color: "dark" } } // currently missing
};

// Variable
const themeColor = user?.preferences?.theme?.color ?? "blue";
// Function
const themeColor1 = () => {
  console.log(user?.preferences?.theme?.color ?? "blue");
};

// themeColor();

/*
**Reflection Question**
According to the transcript, `?.` checks if the value before it "exists." What specific definition of "exists" does the optional chaining operator use (i.e., which two values cause it to short-circuit)?

Reflection Question answer
The two values cause optional chaining operator to short-circuit are null and/or undefined
*/

// ---

/*
### Test 2: Arrays & Bracket Notation

**Scenario**
You are processing a list of users. You want to retrieve the name of the **first user** in the array. However, the array might be empty or validly populated.

**Task**
Given the `users` array below:

1. Use **Optional Chaining with Brackets** `?.[index]` to safely access the **first element** (index 0).
2. Chain another `?.` to access the `.name` property of that element (in case index 0 doesn't exist).
3. Use **Nullish Coalescing** to default to `"Anonymous"` if the array is empty or the name is missing.
4. Log the result.

**Constraints**

* Must use `?.[0]`.
* Must use `?.name`.
* Must use `??`.
* Do not check `.length`.
*/

const users = [name, "james"]; // Currently empty

const firstEl = users?.[0]?.name ?? "Anonymous";
// console.log(firstEl);

// other
const userl = [{ mane: "val" }, "james"]; // Currently empty

const firstEle = userl?.[0]?.mane ?? "Anonymous";
// console.log(firstEle);

/*
**Reflection Question**
In the transcript, the instructor demonstrates `users[0]?.name`. If `users` is an empty array `[]`, `users[0]` returns `undefined`. Why does the `?.` after `[0]` prevent an error in this specific case?

Reflection Question answer:
The the `?.` after `[0]` prevent an error because if no user is found, undefined becomes the default. 
*/

// ---

/*
### Test 3: Methods

**Scenario**
You are building a plugin system where a `device` object might or might not have specific capabilities (methods) depending on the hardware version. You want to turn the device on, but only if the `.turnOn()` method actually exists.

**Task**
Given the `device` object below (which is currently missing the method):

1. Use **Optional Chaining with Method Call** syntax `?.()` to attempt to call `device.turnOn()`.
2. Use **Nullish Coalescing** to log `"Method not supported"` if the method doesn't exist.
3. Do not use `if` statements.

**Constraints**

* Must use `?.()` syntax.
* Must use `??`.

*/
const device = {
  id: 998,
  turnOn: () => console.log("Turning on..."), // Missing
};

// const plugin = device.turnOn?.(0, 1) ?? "Method not supported";
// console.log(plugin);
/*

**Reflection Question**
According to the transcript, why is using `?.()` on a method useful even if you know the *property* (e.g., `device.turnOn`) exists but might not be a function? (Note: The transcript example focuses on existence, but think about what `?.` checks for).

> Reply with your code + your answer to the reflection question.

Reflection Question answer:
The reason to use `?.()` on a method is useful even if you know the *property* (e.g., `device.turnOn`) exists but might not be a function is 
*/

/* Assignments for The Complete JavaScript Course
import { books } from "./books-data.js";
## Enhanced Object Literals

### 10.1
Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

Example 1
getFirstKeyword(book[0]);

Expected output:
"computer science"

Example 2
getFirstKeyword(newBook2); // from previous tasks

Expected output:
undefined
*/

const getFirstKeyword = book => {
  return book?.keywords?.[0];
};

// console.log(getFirstKeyword(books[0]));

// Alternative
const getFirstKeyword1 = book => {
  return book?.keywords?.[0] || `nothing found`;
};

// console.log(getFirstKeyword1(books[0]));
