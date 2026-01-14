import { books } from "./books-data.js";
/*
Logical Assignments Operators
7.1
Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.
*/
// for (let index = 0; index < books.length; index++) {
//   books[index].edition ??= 1;
//   console.log(books[index].edition);
// }

/*
7.2
Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

Use the &&= operator (tip: you may also need the ! operator)
*/
/*
My interpritation:
Expected: (True if > 4.2, False if < 4.2)
Short-circuits to false if right-side is false.

Logic: 
If highlighted is TRUE AND rating is bad -> become FALSE
If highlighted is TRUE AND rating is good -> stay TRUE
If highlighted is already FALSE -> stay FALSE
*/
/*
for (let index = 0; index < books.length; index++) {
  // Check the rating property
  const rating = books[index].thirdParty.goodreads.rating;

  // This let cannot be used because it is mutating a local copy
  let highlighted = books[index].highlighted;

  // Keep highlighted TRUE only if rating is NOT < 4.2
  console.log((highlighted &&= !(rating < 4.2)));
}

for (let index = 0; index < books.length; index++) {
  // Keep highlighted TRUE only if rating is NOT < 4.2
  books[index].highlighted &&= !(books[index].thirdParty.goodreads.rating < 4.2);
}

console.log(books[7]);
*/

/*
**Date: 2026-01-05**

### Challenge 7.3 (AI created) — Logical Assignments (Variant)

Using the same `books-data.js` dataset, design logic that **downgrades online availability** based on rating quality.

#### Requirements

Iterate over the `books` array and apply the following rule:

* If a book **has `onlineContent === true`**
* **AND** its `thirdParty.goodreads.rating` is **below 4.3**
* Then reassign `onlineContent` to `false`

#### Constraints (important)

* You **must** use:

  * a logical assignment operator (`&&=` or `||=`)
  * a comparison (`<`)
* You **may** need:

  * the logical NOT operator (`!`)
* Do **not** introduce:

  * `if` statements
  * ternary operators
  * helper functions
* Assume:

  * some books may **not** have `onlineContent`
  * some books may **not** be highlighted
* Your logic should **not throw** if a property is missing.

#### What this tests (conceptually)

* Understanding that logical assignment operators:

  * short-circuit
  * *both* check a condition **and** mutate state
* Recognizing that:

  * `&&=` only assigns when the left side is truthy
  * comparisons (`<`) produce booleans that can drive assignment
* Carefully choosing **which side of the operator mutates data**

Before writing code, ask yourself:

1. Which value should be on the **left-hand side** of `&&=` so it can be reassigned?
2. What exact condition must evaluate to `true` for reassignment to occur?
3. How do you prevent accidental mutation when `onlineContent` is missing?

When you are ready, respond with **your approach or code**.
If you want the **full reference solution**, explicitly say:
**“Yes, provide the solution.”**
*/

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&= !(books[i].thirdParty.goodreads.rating < 4.3);
// }

// console.log(books[3]);

/*

**2026-01-05**

Below is the **Transcript-Locked Practice Setup** based strictly on:

* **Transcript:** *113. Short Circuiting (&& and ||)* 
* **Baseline:** *JS-I’ve-learnt-so-far.md* 

No concepts outside these two sources are introduced.

---

## Coverage Plan (From Transcript)

## Dependency Gate (Baseline Check)

# Testing Loop 

### Scenario

You are normalizing user input where some values may be empty, missing, or truthy non-booleans.

### Task

Given the following expressions, **write code that logs the result of each expression** and **annotate (as comments) what value is returned**:

```js
console.log(3 || "fallback");
console.log("" || "default");
console.log(true || 0);
console.log(undefined || null);
```

**Constraints**

* Do not convert values to booleans
* Do not use `if`, ternary, or functions
* Rely purely on how `||` evaluates operands

### Reflection Question (answer in plain English)

Why does `undefined || null` return `null` even though both values are falsy?

---

Reply with **your code + your answer to the reflection question**.


# My Response:
`||` (OR) Operator:
The `||` (OR) operand expects a truthy value, therefore it resolves to true when true is an option, in addition, it resolves to the last falsey value when no truthy value is available.

Task:
console.log(3 || "fallback");      // returns: 3 (first truthy value)
console.log("" || "default");       // returns: "default" ("" is falsy, so returns second operand)
console.log(true || 0);             // returns: true (first truthy value)
console.log(undefined || null);     // returns: null (both falsy, returns last operand)

Reflection Question:
The `||` (OR) operand resolves to the last falsey value when no truthy value is available.
*/
const user = {
  name: "Kevin",
  nickname: "",
  role: undefined,
};

// console.log((user.name &&= "Anonymous"));
