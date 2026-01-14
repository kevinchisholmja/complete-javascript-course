import { books } from "./books-data.js";

/* AI Gemini

### Test 1: Deduplication & Basic Methods

**Scenario**
You are processing a list of customer IDs from a transaction log. A customer might appear multiple times if they bought multiple items, but you only want a list of **unique** customers to send a "Thank You" email to.

**Task**
Given the `transactionLog` array:

1. Create a **Set** named `uniqueCustomers` to automatically remove duplicates.
2. **Add** a new customer ID `"Cust_99"` manually (who made a purchase just now).
3. Convert the final Set back into an **Array** named `emailList`.
4. Log the `emailList`.

**Constraints**

* Must use `new Set()`.
* Must use `.add()`.
* Must use the Spread operator `[...]` for the final conversion.
*/

const transactionLog = ["Cust_01", "Cust_02", "Cust_01", "Cust_03", "Cust_02"];

// Your code here

/*
**Reflection Question**
According to the transcript, why can't you access the first customer using `uniqueCustomers[0]`?

Reflection Question answer:
- in JavaScript, Set does not use keys.
- Sets have no indexes.
- Arrays are ordered and indexed (0, 1, 2...).
- Sets are unordered collections of unique values, so asking for the "0th" item is meaningless to JavaScript.
*/

const uniqueCustomers = new Set(transactionLog);
uniqueCustomers.add("Cust_99");

const emailList = [...uniqueCustomers];

// console.log(emailList);

/*

### Test 2: Set Composition (ES2025)

**Scenario**
You are comparing the skills of two developer candidates. You want to identify which skills they **share** (to find common ground) and which skills **Candidate A has that Candidate B lacks** (to find unique advantages).

**Task**

1. Create `skillsA`: `new Set(["JS", "HTML", "React"])`
2. Create `skillsB`: `new Set(["JS", "Node", "React"])`
3. Use `.intersection()` to create a set called `sharedSkills`.
4. Use `.difference()` to create a set called `uniqueToA` (skills in A but not in B).
5. Log both new sets.

**Constraints**

* Must use `.intersection()`.
* Must use `.difference()`.

*/

// Setup
const skillsA = new Set(["JS", "HTML", "React"]);
const skillsB = new Set(["JS", "Node", "React"]);

// Your code here
const sharedSkills = skillsA.intersection(skillsB);
const uniqueToA = skillsA.difference(skillsB);
// console.log(sharedSkills);
// console.log(uniqueToA);

/*
**Reflection Question**
The transcript notes that for `.intersection()`, the order doesn't matter (`A.intersection(B)` is the same as `B.intersection(A)`). However, for `.difference()`, the order **does** matter. Why?

Reflection Question answer:
For .difference(), JavaScript needs to know what which array should be returned with the non intersecting elements of its array.
*/

// ---

/* Assignments for The Complete JavaScript Course

## Enhanced Object Literals

### 12.1

Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: 

['computer science', 'programming', 'algorithms', 'data structures', ...].

*/
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}
// console.log(allKeywords);

/* 

### 12.2

The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

*/

const uniqueKeywords = new Set(allKeywords);

// console.log(uniqueKeywords);

/* 

### 12.3

Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

*/
uniqueKeywords.add("coding");
uniqueKeywords.add("science");

// console.log(uniqueKeywords);

/* 

### 12.4

Delete 'business' from the uniqueKeywords set.

*/
uniqueKeywords.delete("business");

// console.log(uniqueKeywords);

/* 

### 12.5

Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

*/

const uniqueKeywordsArr = [...uniqueKeywords];

// Alternative
// const uniqueKeywordsArr1 = [];
// for (const uniqueKeyword of uniqueKeywords) {
//   uniqueKeywordsArr1.push(uniqueKeyword);
// }

// console.log(uniqueKeywordsArr);

/* 

### 12.6

Delete all items from the uniqueKeywords set.

*/
uniqueKeywords.clear();

// console.log(uniqueKeywords);
